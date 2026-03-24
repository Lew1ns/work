// 项目数据
export interface Project {
  id: number;
  title: string;
  overview: string;
  techStack: string[];
  responsibilities: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Python 实现双色球抽奖',
    overview: '使用 Python 开发的双色球模拟抽奖系统,实现了随机选号、用户自选号码、历史开奖记录模拟及中奖金额计算等功能。',
    techStack: ['Python', 'random 库', 'tkinter'],
    responsibilities: '利用 random.sample 实现红球（1-33 选 6）与蓝球（1-16 选 1）的无重复随机生成；设计了符合实际规则的中奖判定逻辑,验证了概率分布的均匀性。'
  },
  {
    id: 2,
    title: 'TensorFlow 训练模型预测波士顿房价',
    overview: '基于 TensorFlow 框架构建的线性回归与神经网络模型,利用波士顿房价数据集进行特征分析,实现对房屋价格（MEDV）的精准预测。',
    techStack: ['TensorFlow', 'Keras', 'Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn'],
    responsibilities: '负责数据预处理（标准化处理、异常值剔除、特征相关性分析）；搭建并对比了单层线性模型与多层全连接神经网络（DNN）的效果；使用均方根误差（RMSE）作为评估指标,并利用可视化工具绘制损失曲线。'
  }
];
