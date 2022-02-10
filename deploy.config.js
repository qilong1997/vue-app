module.exports = {
  projectName: "vueapp",
  privateKey: "/Users/heqilong/.ssh/id_rsa",
  passphrase: "",
  cluster: [],
  dev: {
    name: "dev-vueapp",
    script: "npm run build",
    host: "101.43.149.77",
    port: 22,
    username: "root",
    password: "970103Ly....",
    distPath: "dist",
    webDir: "/root/vueapp",
    bakDir: "",
    isRemoveRemoteFile: true,
    isRemoveLocalFile: false,
  },
  test: {
    // 环境对象
    name: '测试环境', // 环境名称
    script: 'npm run build:test', // 打包命令
    host: '101.43.149.77', // 服务器地址
    port: 22, // 服务器端口号
    username: 'root', // 服务器登录用户名
    password: '970103Ly....', // 服务器登录密码
    distPath: 'dist', // 本地打包生成目录
    webDir: '/root/vueapp', // 服务器部署路径（不可为空或'/'）
    isRemoveRemoteFile: true, // 是否删除远程文件（默认true）
    isRemoveLocalFile: false,
  },
  prod: {
    // 环境对象
    name: '生产环境', // 环境名称
    script: 'npm run build:prod', // 打包命令
    host: '101.43.149.77', // 服务器地址
    port: 22, // 服务器端口号
    username: 'root', // 服务器登录用户名
    password: '970103Ly....', // 服务器登录密码
    distPath: 'dist', // 本地打包生成目录
    webDir: '/root/vueapp', // 服务器部署路径（不可为空或'/'）
    isRemoveRemoteFile: true, // 是否删除远程文件（默认true）
    isRemoveLocalFile: false,
  }
};
