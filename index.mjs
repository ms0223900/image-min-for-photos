import imagemin from 'imagemin';
import imageminJpegRecompress from 'imagemin-jpeg-recompress';

const IMAGE_SOURCE_PATH = 'images'
const OUTPUT_PATH = 'build/images'
const IMAGEMIN_JPEG_RECOMPRESS_CONFIGS = {
    quality: 'medium'
}

imagemin([`${IMAGE_SOURCE_PATH}/*`], {
    destination: OUTPUT_PATH,
    plugins: [
        imageminJpegRecompress({
            quality: 'medium',
            ...IMAGEMIN_JPEG_RECOMPRESS_CONFIGS
        })
    ]
}).then(() => {
    console.log('Images optimized');
});