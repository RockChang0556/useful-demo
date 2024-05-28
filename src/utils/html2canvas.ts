/**
  Html2canvas Class options

  new Html2canvas({
    el: dom,
    file: {
      name: 'download',       // {string} 要下载的图片文件名,不包括后缀,默认 'download'
      imgType: 'png',         // {string} 要下载的图片的类型, png(默认) | jpeg | bmp | gif
    },
    opt: {
      backgroundColor: "#fff",              // {string} 图片背景色
      scale: 2,                             // {number} 缩放倍数
      width: this.targetDom.offsetWidth,    // {number} 图片的宽, 默认dom的宽
      height: this.targetDom.offsetHeight,  // {number} 图片的高, 默认dom的高
      allowTaint: true,                     // {boolean} 是否允许跨域图片污染画布
      useCORS: true,                        // {boolean}【重要】是否允许加载跨域图片
      logging: true,                        // {boolean} 日志开关，便于查看html2canvas的内部执行流程
    };
  })

  Events

  getImgData(imgData) 获取base64的图片数据
    imgData: {string} base64的图片数据

  download(imgData) 下载图片
    如果浏览器是IE,需要用户手动右键保存,如果不是则自动弹出下载框
    imgData: {string} base64的图片数据
  
  creatImg(dom) 创建 img 标签, 并加入src数据
    dom: {HtmlDom} 带src的图片的dom元素

 */
// import html2canvas from 'html2canvas';

// /** 文件类型 */
// interface IFile {
// 	name: string;
// 	imgType: string;
// }
// /** Html2canvas配置参数 */
// interface IOption {
// 	/** 图片背景色, 默认 transparent */
// 	backgroundColor: string;
// 	/** 缩放倍数, 默认2 */
// 	scale: number;
// 	/** 图片的宽, 默认dom的宽 */
// 	width: number;
// 	/** 图片的高, 默认dom的高 */
// 	height: number;
// 	/** 是否允许跨域图片污染画布, 默认true */
// 	allowTaint: boolean;
// 	/** 【重要】是否允许加载跨域图片, 默认true */
// 	useCORS: boolean;
// 	/** 日志开关，便于查看html2canvas的内部执行流程, 默认false */
// 	logging: boolean;
// }
// interface IRoot {
// 	el: HTMLElement | null;
// 	file?: Partial<IFile>;
// 	opt?: Partial<IOption>;
// }

// const formatImgdata = (canvas: HTMLCanvasElement, imgType: string) => {
// 	let fixtype = function (type: string) {
// 		type = type.toLocaleLowerCase().replace(/jpg/i, 'jpeg');
// 		let r = type.match(/png|jpeg|bmp|gif/) || ['png'];
// 		return 'image/' + r[0];
// 	};
// 	let imgdata = canvas.toDataURL(imgType);
// 	imgdata = imgdata.replace(fixtype(imgType), 'image/octet-stream');
// 	return imgdata;
// };
// const savaFile = function (data: string, filename: string) {
// 	let saveLink = document.createElement('a');
// 	saveLink.href = data;
// 	saveLink.download = filename;
// 	document.body.appendChild(saveLink);
// 	let event = document.createEvent('MouseEvents');
// 	event.initMouseEvent(
// 		'click',
// 		true,
// 		false,
// 		window,
// 		0,
// 		0,
// 		0,
// 		0,
// 		0,
// 		false,
// 		false,
// 		false,
// 		false,
// 		0,
// 		null
// 	);
// 	saveLink.dispatchEvent(event);
// 	document.body.removeChild(saveLink);
// };

// class Html2canvas {
// 	targetDom = null || HTMLElement.prototype;
// 	imgData = ''; // 图片base64数据
// 	file: IFile | null = null;
// 	t2cOpt: IOption | null = null;
// 	initPromise: Promise<void> | null = null;

// 	constructor(options: IRoot) {
// 		if (!options.el) {
// 			throw new Error('DOM access failed!');
// 		}
// 		this.targetDom = options.el;
// 		this._init(options);
// 	}

// 	_init(options: IRoot) {
// 		let { file, opt } = options;
// 		// html2canvas方法的默认参数
// 		const defOpts: IOption = {
// 			backgroundColor: 'transparent',
// 			scale: 2,
// 			width: this.targetDom.offsetWidth,
// 			height: this.targetDom.offsetHeight,
// 			allowTaint: true,
// 			useCORS: true,
// 			logging: false,
// 		};
// 		const defFile = {
// 			name: 'download',
// 			imgType: 'png',
// 		};
// 		// 用户参数覆盖
// 		this.t2cOpt = Object.assign({}, defOpts, opt);
// 		this.file = Object.assign({}, defFile, file);

// 		// 创建 copyDom, 防止污染页面
// 		const copyDom = this.targetDom.cloneNode(true) as HTMLElement;
// 		copyDom.style.width = this.targetDom.offsetWidth + 'px';
// 		copyDom.style.height = this.targetDom.offsetHeight + 'px';
// 		copyDom.style.position = 'fixed';
// 		copyDom.style.left = '-9999px';
// 		document.body.appendChild(copyDom);

// 		this.initPromise = new Promise<void>(resolve => {
// 			if (this.imgData) {
// 				resolve();
// 			} else {
// 				html2canvas(copyDom, this.t2cOpt).then((canvas: HTMLCanvasElement) => {
// 					document.body.removeChild(copyDom);
// 					this.imgData = formatImgdata(canvas, this.file!.imgType);
// 					resolve();
// 				});
// 			}
// 		});
// 	}

// 	getImgData(callback?: (s: string) => void) {
// 		this.initPromise!.then(() => {
// 			callback && callback(this.imgData);
// 		});
// 		return this;
// 	}

// 	download(callback?: (s: string) => void) {
// 		this.initPromise!.then(() => {
// 			if (navigator.userAgent.indexOf('MSIE') != -1) {
// 				alert(
// 					'您当前的浏览器不支持自动保存，请放在图片区域右键手动存储图片，建议更换浏览器~'
// 				);
// 			} else {
// 				let filename = this.file!.name + '.' + this.file!.imgType;
// 				savaFile(this.imgData, filename);
// 			}
// 			callback && callback(this.imgData);
// 		});
// 		return this;
// 	}

// 	creatImg(callback?: (s: HTMLImageElement) => void) {
// 		this.initPromise!.then(() => {
// 			let newImg = document.createElement('img');
// 			newImg.src = this.imgData;
// 			newImg.style.display = 'block';
// 			newImg.style.width = this.t2cOpt!.width + 'px';
// 			newImg.style.height = this.t2cOpt!.height + 'px';
// 			callback && callback(newImg);
// 		});
// 		return this;
// 	}
// }
// export default Html2canvas;
