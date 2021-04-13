interface parmas {
  methods:string,
  hostName: string,
  port:string,
  pathName:string,
  search:string
}
export function test (params):string{
  return params.pathName + params.search;
}
export function test1(params):string{
  return '测试热'
}
export function updateImgSet():string{

  return ''
}
