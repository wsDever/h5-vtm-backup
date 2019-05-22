## VTM 智能助手

目录结构：
 - external 不经过webpack编译的js库或公共组件
 - src/apps/客户 每个针对客户的
 - src/assets/common 基础样式 
   - 客户 针对客户的样式
 - src/components/common 基础Vue基础组件
   - 客户 针对客户的UI组件
... 以此类推其他 config(配置)、libs(功能库)、models(接口数据交互层)、router(路由) 都基于以上思路