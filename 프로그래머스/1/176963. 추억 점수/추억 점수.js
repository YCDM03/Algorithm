function solution(names, yearning, photos) {
    const filterPhotos=photos.map((photo)=>photo.filter((el)=>names.includes(el)))
    const result=filterPhotos.map((photos)=>{
        let num=0
        photos.forEach((photo)=>{num+=yearning[names.findIndex((name)=>name===photo)]})
        return num
})
    return result
}