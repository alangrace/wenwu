import request from '@/utils/request'

export default {
  //条件分页课程查询的方法
//   getCourseList(page,limit,searchObj) {
//     return request({
//       url: `/eduservice/coursefront/getFrontCourseList/${page}/${limit}`,
//       method: 'post',
//       data: searchObj
//     })
//   },
//   //查询所有分类的方法
//   getAllSubject() {
//     return request({
//       url: '/eduservice/subject/getAllSubject',
//       method: 'get'
//     })
//   },
  //添加评论的方法
  addComment(comment) {
    return request({
      url: '/eduservice/comment/addComment',
      method: 'post',
      data: comment
    })
  }

}