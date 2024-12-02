//详情cropper功能请看参考文档https://mraining.github.io/Cropperjs.html 或者csdn
import Cropper from "cropperjs"
let cropper = null
//启动裁剪功能,imagePath:图片元素id或者ref拿到的，previewPath:div的预览class（需要加.）
export const openCropper = (imagePath,previewPath)=>{
    if(cropper){
        cropper.destroy()//销毁，防止导致不更新裁剪
    }
    cropper = 
        new Cropper(imagePath,{
            aspectRatio:1/1,//裁剪区域比例
            viewMode:1,
            dragMode:'move',
            background:false,
            modal:true,
            preview:previewPath,
            movable:false,
            scalable:false,
            zoomable:false,
        },) 
}
//获取裁剪后的图片
export const cropPhoto=()=>{
    const{x,y,width,height} = cropper.getData(true)
    const crop_new = cropper.getCroppedCanvas({
        width:width,
        height:height,
    })
    //转化为图片url
    const dataURL = crop_new.toDataURL('image/jpeg',0.95)
    cropper.destroy()
    return dataURL
} 