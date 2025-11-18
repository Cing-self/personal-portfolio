export interface BlogPost {
  id: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  imageUrl: string
  author?: string
  content?: string
}

export const blogPosts: Record<string, BlogPost> = {
  '1': {
    id: '1',
    title: 'How to Use Transformer Models for Text Summarization',
    excerpt: 'This article explores the core principles of the Transformer architecture and provides a practical case study using Hugging Face for text summarization...',
    content: `
      <h2>Introduction</h2>
      <p>Transformer models have revolutionized the field of natural language processing since their introduction in the groundbreaking paper "Attention is All You Need" by Vaswani et al. These models have become the backbone of modern NLP applications, from machine translation to text generation and summarization.</p>
      
      <h2>Understanding the Transformer Architecture</h2>
      <p>The Transformer architecture is built on the concept of self-attention mechanisms, which allow the model to weigh the importance of different parts of the input sequence when processing each token. This is a significant departure from previous sequence-to-sequence models that relied on recurrent or convolutional layers.</p>
      
      <h3>Key Components</h3>
      <ul>
        <li><strong>Multi-Head Self-Attention:</strong> Allows the model to focus on different positions simultaneously</li>
        <li><strong>Position Encoding:</strong> Provides information about the position of tokens in the sequence</li>
        <li><strong>Feed-Forward Networks:</strong> Applied to each position separately and identically</li>
        <li><strong>Layer Normalization:</strong> Stabilizes training by normalizing inputs</li>
      </ul>
      
      <h2>Text Summarization with Transformers</h2>
      <p>Text summarization is the task of creating a concise and coherent summary of a longer text while preserving the key information. Transformers excel at this task because they can understand the relationships between different parts of the text and identify the most important information.</p>
      
      <h3>Types of Summarization</h3>
      <ul>
        <li><strong>Extractive Summarization:</strong> Selects and combines existing sentences from the text</li>
        <li><strong>Abstractive Summarization:</strong> Generates new sentences that capture the essence of the text</li>
      </ul>
      
      <h2>Implementation with Hugging Face</h2>
      <p>Hugging Face has made it incredibly easy to work with pre-trained Transformer models. Their Transformers library provides a simple API for using state-of-the-art models for various NLP tasks, including summarization.</p>
      
      <h2>Best Practices</h2>
      <ul>
        <li><strong>Choose the right model:</strong> Different models have different strengths and weaknesses</li>
        <li><strong>Preprocess your text:</strong> Clean and format your input text appropriately</li>
        <li><strong>Adjust parameters:</strong> Experiment with max_length, min_length, and other parameters</li>
        <li><strong>Evaluate results:</strong> Use appropriate metrics to assess the quality of summaries</li>
      </ul>
    `,
    category: 'AI/ML',
    date: 'October 26, 2023',
    readTime: '10 min read',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJDk5KsxlFlKrh7qwWJJ4SfpRRaCfEeFLx18IillrfRM3Zq0QQrVS8fzIz_7QVUT3SGcSNxullBSc7nc-OmsXGWwRbr-9MRpr-tFTEz6JyNxOg18sfXlU044DGq2vg1lP9mJwsDLR6V3Gj4_MK7hREt2-FL1YhwXs7LA5H8mmn1SqYXlNwbSRvNB4JAwG75nXl2hld6pLOJwYnpqq4U0LjXQz2rRztiomyEaDk_O3MI2HqWzZvqY6uR7wAuEMj6TNjDVtqV5Lxnzx4',
    author: 'John Doe'
  },
  '2': {
    id: '2',
    title: 'Building a Serverless API with Next.js and Vercel',
    excerpt: 'A step-by-step guide to creating a fully functional, scalable, and cost-effective serverless API using the Next.js framework and deploying it on Vercel.',
    content: `
      <h2>Introduction</h2>
      <p>Serverless computing has changed the way we build and deploy applications. By leveraging cloud platforms like Vercel, you can create powerful APIs without worrying about infrastructure management.</p>
      
      <h2>What is Serverless?</h2>
      <p>Serverless architecture allows you to write code that automatically scales based on demand. You only pay for the resources you use, making it a cost-effective solution for many applications.</p>
      
      <h2>Getting Started with Next.js</h2>
      <p>Next.js provides built-in support for serverless functions through API routes. This makes it incredibly easy to build APIs without setting up any backend infrastructure.</p>
      
      <h2>Creating API Routes</h2>
      <p>In Next.js, creating an API route is as simple as creating a file in the pages/api directory. Each file becomes an API endpoint.</p>
      
      <h2>Deployment on Vercel</h2>
      <p>Vercel is the company behind Next.js and offers seamless deployment with zero configuration. Simply connect your GitHub repository and every push will be automatically deployed.</p>
    `,
    category: 'Web Dev',
    date: 'September 15, 2023',
    readTime: '8 min read',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZR0_unBRHttGAQS5yhJjpcA4zJVHPLm57DciVLtm1em_Z1PKyMPmRvLwg93xo43wsFq84ZwWo08xJgV-Fl6HGJb84_NA8X1c0k-nfma23nTx0lsr4dxYvg2jUOkPvkmP56XdR3bfRg09vEzQiPJYlfmm5qef3lErPAwRV6xudqvFwwRbEKC893GHLaeS0YX7JjeEy695pcifkn8iWhteGTeG8yHry8tK11t9wVLmLB2MP4QQn6nrd0L5OixTVSsUZCwBRQvUwKudf',
    author: 'John Doe'
  },
  '3': {
    id: '3',
    title: 'Getting Started with PyTorch: A Comprehensive Guide',
    excerpt: 'Learn the fundamentals of PyTorch, from tensor operations to building neural networks. This comprehensive guide covers everything you need to start your deep learning journey.',
    content: `
# 深度学习框架 PyTorch 完全指南

## 什么是 PyTorch？

PyTorch 是由 Meta（原 Facebook）开发的一个开源机器学习库。它提供了灵活而高效的深度学习平台，具有用户友好的 API，成为研究人员和实践者的最爱。

### 核心特性

* **动态计算图**：实时构建和修改图结构
* **Pythonic 设计**：代码感觉就像常规 Python
* **强大的 GPU 支持**：无缝集成 CUDA
* **活跃社区**：丰富的文档和教程

## 安装和配置

你可以通过 pip 安装 PyTorch：

pip install torch torchvision torchaudio

或者从 [官方网站](https://pytorch.org) 获取更多安装选项。

## 核心概念详解

### 1. 张量（Tensors）基础

张量是 PyTorch 的基本数据结构，可以理解为多维数组：

* **标量**：0 维张量，单个数值
* **向量**：1 维张量，一列数字
* **矩阵**：2 维张量，行列数据
* **高维张量**：3D、4D 及更高维度

创建张量的几种方法：

1. 从 Python 列表创建
2. 从 NumPy 数组转换
3. 使用内置函数（zeros、ones、rand）

### 2. 自动求导（AutoGrad）

**自动求导**是 PyTorch 的核心特性之一。当你在启用梯度跟踪的张量上执行操作时，PyTorch 会自动构建计算图。

关键点：

* requires_grad=True 启用梯度计算
* .backward() 执行反向传播
* .grad 访问计算得到的梯度

### 3. 神经网络模块

PyTorch 提供了丰富的层类型：

* **全连接层**（Linear）
* **卷积层**（Conv2d）
* **递归层**（LSTM、GRU）
* **归一化层**（BatchNorm、LayerNorm）
* **激活函数**（ReLU、Sigmoid、Tanh）

## 完整的训练流程

### 第一步：准备数据

使用 DataLoader 加载和批处理数据。支持自定义数据集和内置数据集。

### 第二步：定义模型

继承 nn.Module 创建自定义模型。在 __init__ 中定义层，在 forward 中定义前向传播。

### 第三步：设置损失函数和优化器

* **损失函数**：CrossEntropyLoss、MSELoss 等
* **优化器**：Adam、SGD、RMSprop 等

### 第四步：训练循环

标准训练步骤：

1. 前向传播计算预测
2. 计算损失值
3. 清零梯度
4. 反向传播
5. 更新参数

## 最佳实践指南

### 性能优化

* 对大型数据集使用 GPU
* 批量处理数据（Batch）
* 使用 torch.no_grad() 禁用梯度计算（推理时）
* 混合精度训练加速

### 调试技巧

* 验证输入数据维度
* 检查梯度流动
* 使用 TensorBoard 可视化训练过程
* 定期保存检查点

### 模型保存和加载

* 保存完整模型：torch.save(model, path)
* 保存权重：torch.save(model.state_dict(), path)
* 加载权重：model.load_state_dict(torch.load(path))

## 实用代码示例

### 简单线性模型

这是一个完整的线性回归示例：定义模型、训练和评估。

### 卷积神经网络

CNN 特别适合图像处理任务。关键是合理设计卷积和池化层。

## 常见问题解答

**Q: 如何在 CPU 和 GPU 之间切换？**
A: 使用 .to(device) 方法，其中 device 可以是 cpu 或 cuda 。

**Q: 什么时候使用 eval() 模式？**
A: 在推理或评估阶段。这会禁用 Dropout 和 BatchNorm 的训练行为。

**Q: 如何处理过拟合？**
A: 使用 Dropout、L1/L2 正则化、数据增强、早停法等技术。

## 总结

PyTorch 提供了构建强大深度学习模型所需的一切。通过掌握基本概念和最佳实践，你将能够快速构建最先进的模型！
    `,
    category: 'Deep Learning',
    date: 'August 02, 2023',
    readTime: '20 min read',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBjMTCt40LNyONbRXQ-ooDUV7_bJnXQH7jhO0TjCXV6PqkT7rnP9MbHxv4hj8ONnFiTo1TTnyyXGSmGp-Rz0GmR1tveIP5GVJjb8x4RaUcf5lgH_Xm1SXkrY2vdJoqWHuEYCFu_Qsu9_jtoBi7Nr6_i5_EDsiEPiroJusFJbwEcVf4nXF5xJ4EpYk8_O1m4_igj7jSGpetib2fmudXlfLMGCljJMzD0ZVh36utOEStLJIKPGSkkOxLmSCC1vAjGZfBloP3Fk3BFJ4I-',
    author: 'John Doe'
  },
  '4': {
    id: '4',
    title: 'React 19: New Features and Best Practices',
    excerpt: 'Explore the latest features in React 19, including improved performance, new hooks, and best practices for building modern web applications.',
    content: `
      <h1>React 19 完整深度指南：新特性与最佳实践</h1>
      
      <h2>React 19 核心更新</h2>
      <p>React 19 带来了重大改进，使库变得更加强大和开发者友好。让我们深入探讨关键特性和增强功能。</p>
      
      <h2>一、服务器组件（Server Components）</h2>
      <p>React 19 最大的补充是引入了<strong>服务器组件</strong>。这些组件完全在服务器上运行，允许您直接访问数据库和密钥，而无需将它们暴露给客户端。</p>
      
      <h3>服务器组件的优势</h3>
      <ul>
        <li><strong>直接数据库访问：</strong>无需 API 层直接查询数据库</li>
        <li><strong>更好的安全性：</strong>将敏感信息保留在服务器端</li>
        <li><strong>减少包大小：</strong>重型依赖保留在服务器上</li>
        <li><strong>性能提升：</strong>更快的初始页面加载速度</li>
        <li><strong>实时数据：</strong>无需重新部署即可更新内容</li>
      </ul>
      
      <h2>二、增强型 Hooks</h2>
      <p>React 19 引入了新的 hooks 和改进了现有 hooks，使状态管理和副作用处理更加容易。</p>
      
      <h3>新增 Hooks 详细说明</h3>
      <ul>
        <li><strong>useOptimistic：</strong>在服务器确认前乐观更新 UI，改善用户体验</li>
        <li><strong>useFormStatus：</strong>获取表单提交状态，实现加载指示器</li>
        <li><strong>useActionState：</strong>与服务器操作更好地集成，简化异步处理</li>
        <li><strong>useTransition：</strong>标记更新为非紧急，保持 UI 响应</li>
        <li><strong>useDeferredValue：</strong>推迟值更新以优化性能</li>
      </ul>
      
      <h2>三、自动批处理改进</h2>
      <p>React 19 中的自动批处理超越了 promise 回调和事件处理程序。它现在包括超时和间隔，在不需要开发者额外优化的情况下提供更好的性能。</p>
      <p>这意味着多个状态更新将自动分组为单个渲染，显著<em>提高应用性能</em>。</p>
      
      <h2>四、Transitions API 详解</h2>
      <p>Transitions API 允许您将更新标记为非紧急，即使在进行繁重计算时也能保持 UI 响应。这对搜索输入和筛选操作特别有用。</p>
      <p>使用 transitions 可以：</p>
      <ul>
        <li>保持输入响应灵敏</li>
        <li>在后台处理复杂计算</li>
        <li>优雅地处理加载状态</li>
        <li>改善用户感知性能</li>
      </ul>
      
      <h2>五、表单操作和验证</h2>
      <p>React 19 简化了表单处理流程。现在可以直接将服务器函数传递给表单元素。</p>
      
      <h3>表单相关改进：</h3>
      <ul>
        <li>原生表单操作集成</li>
        <li>自动错误处理</li>
        <li>内置验证支持</li>
        <li>简化的异步表单提交</li>
      </ul>
      
      <h2>六、Refs 和性能优化</h2>
      <p><strong>Refs</strong> 是访问 DOM 元素的强大方式。React 19 使 ref 回调更加灵活。</p>
      <p>性能优化技巧：</p>
      <ul>
        <li>使用 <code>React.memo</code> 防止不必要的重新渲染</li>
        <li>利用 <code>useMemo</code> 缓存计算结果</li>
        <li>优化 <code>useCallback</code> 以稳定函数引用</li>
        <li>代码分割和懒加载组件</li>
      </ul>
      
      <h2>七、并发特性</h2>
      <p>React 19 的并发特性让应用能够：</p>
      <ol>
        <li>中断长时间运行的渲染</li>
        <li>优先处理高优先级更新</li>
        <li>保持应用响应性</li>
        <li>提供更平滑的用户体验</li>
      </ol>
      
      <h2>八、最佳实践指南</h2>
      <h3>推荐做法</h3>
      <ul>
        <li><strong>默认使用服务器组件：</strong>尽可能移至服务器组件</li>
        <li><strong>优化 Suspense 边界：</strong>战略性地使用它们以改善 UX</li>
        <li><strong>利用新 hooks：</strong>使用 useOptimistic 改善用户体验</li>
        <li><strong>监控包大小：</strong>使用工具跟踪和优化您的包</li>
        <li><strong>性能监控：</strong>使用 React DevTools 进行性能分析</li>
      </ul>
      
      <h2>九、升级指南</h2>
      <p>从 React 18 升级到 React 19 的步骤：</p>
      <ol>
        <li>更新 React 和 React DOM 版本</li>
        <li>检查弃用的 API 用法</li>
        <li>利用新的 hooks 和功能</li>
        <li>测试应用以确保兼容性</li>
        <li>逐步迁移到服务器组件</li>
      </ol>
      
      <h2>十、常见问题解答</h2>
      <dl>
        <dt><strong>Q: 如何在现有项目中使用服务器组件？</strong></dt>
        <dd>A: 逐步迁移。首先将顶级路由转换为服务器组件，然后逐步迁移其他组件。</dd>
        <dt><strong>Q: useOptimistic 的最佳用例是什么？</strong></dt>
        <dd>A: 用于表单提交、删除操作和任何需要立即反馈的用户操作。</dd>
        <dt><strong>Q: 服务器组件会增加包大小吗？</strong></dt>
        <dd>A: 不会。实际上，由于依赖保留在服务器上，它会<em>减少</em>包大小。</dd>
        <dt><strong>Q: 如何调试服务器组件？</strong></dt>
        <dd>A: 使用 React DevTools 和服务器日志。服务器日志将显示服务器组件的执行。</dd>
      </dl>
      
      <h2>十一、总结和展望</h2>
      <p>React 19 代表着 Web 开发的重大进步。通过采用<strong>服务器组件</strong>和新的<strong>并发特性</strong>，您可以构建<em>更快</em>、<em>更安全</em>和<em>更易维护</em>的应用程序。</p>
      <p>随着这些新工具的推出，React 开发人员现在可以创建下一代 Web 应用程序，提供无与伦比的性能和用户体验。</p>
    `,
    category: 'Web Dev',
    date: 'July 21, 2023',
    readTime: '25 min read',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCGfgXf6nGcgpGu-SAJrqcWCGJLxNfRvIMW9FcqiP2Wfb622NyMeg2WhWdRqFmZV3kLE0lAgmUgeZ6sZULyEAA7d6fUi-CEU7hgs-dpxeQNSXErVn7sPMa82r-1VyUSmOZnhI24lIwauqmR_eOJtlHJ2DY8n7-s84u8Iufu4YTqZk0BPRJVIkCE14ZG1aOg5zAnRiGgLPRtqXAgirH11rmD993xCjMc0_guOceqOABJw4A8VXvlR2pZF0o-vyRWtHG_aSzgevMbqSp',
    author: 'John Doe'
  }
}
