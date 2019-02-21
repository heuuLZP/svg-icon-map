// import './svgs/love.svg'
// 引入所有的svg的文件
const requireAll = requireContext => requireContext.keys().map(requireContext);
const req = require.context('./svgs', false, /\.svg$/);
requireAll(req);