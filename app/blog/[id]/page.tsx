import Link from 'next/link';
import { formatDistanceToNow } from 'date-fns';
import { notFound } from 'next/navigation';

// Mock data for demonstration
const blogPosts = {
  1: {
    id: 1,
    title: "Latest RTX 4090 vs RTX 4080: Performance Deep Dive",
    content: `
# Latest RTX 4090 vs RTX 4080: Performance Deep Dive

The battle between NVIDIA's flagship graphics cards has never been more intense. In this comprehensive analysis, we'll dive deep into the performance differences between the RTX 4090 and RTX 4080 across various gaming scenarios, synthetic benchmarks, and real-world applications.

## Hardware Specifications

### RTX 4090
- **CUDA Cores**: 16,384
- **Memory**: 24GB GDDR6X
- **Memory Bus**: 384-bit
- **Base Clock**: 2.23 GHz
- **Boost Clock**: 2.52 GHz
- **TDP**: 450W

### RTX 4080
- **CUDA Cores**: 9,728
- **Memory**: 16GB GDDR6X
- **Memory Bus**: 256-bit
- **Base Clock**: 2.21 GHz
- **Boost Clock**: 2.51 GHz
- **TDP**: 320W

## Gaming Performance

### 4K Gaming Benchmarks

Our testing methodology involved running the latest AAA titles at 4K resolution with maximum settings enabled. The results were impressive across the board:

- **Cyberpunk 2077**: RTX 4090 averaged 78 FPS vs RTX 4080's 62 FPS
- **Red Dead Redemption 2**: RTX 4090 achieved 89 FPS vs RTX 4080's 71 FPS
- **Assassin's Creed Valhalla**: RTX 4090 scored 94 FPS vs RTX 4080's 76 FPS

### Ray Tracing Performance

When it comes to ray tracing, the RTX 4090's additional RT cores provide a significant advantage:

- **Control**: RTX 4090 maintained 65 FPS with ray tracing enabled, while RTX 4080 dropped to 52 FPS
- **Minecraft RTX**: RTX 4090 achieved 120+ FPS consistently, RTX 4080 averaged 95 FPS

## Content Creation & Productivity

### 3D Rendering
- **Blender**: RTX 4090 completed the BMW benchmark in 1.2 minutes vs RTX 4080's 1.8 minutes
- **V-Ray**: RTX 4090 scored 3,847 vs RTX 4080's 2,891

### Video Editing
- **DaVinci Resolve**: 8K timeline playback was smooth on both cards, but RTX 4090 handled multiple streams better
- **Adobe Premiere Pro**: Export times were 25% faster on RTX 4090

## Power Efficiency & Thermals

### Power Consumption
- **RTX 4090**: Peak power draw reached 450W under full load
- **RTX 4080**: More efficient at 320W peak consumption

### Temperature Management
Both cards maintained excellent thermal performance:
- **RTX 4090**: Max temp 72°C under load
- **RTX 4080**: Max temp 68°C under load

## Price-to-Performance Analysis

### RTX 4090
- **Price**: $1,599
- **Performance**: 100% (baseline)
- **Value Score**: 6.3/10

### RTX 4080
- **Price**: $1,199
- **Performance**: 78% of RTX 4090
- **Value Score**: 7.8/10

## Conclusion

The RTX 4090 is undoubtedly the performance king, offering unmatched gaming and productivity performance. However, the RTX 4080 provides excellent value for users who don't need the absolute maximum performance.

**For Gaming Enthusiasts**: If you're gaming at 4K with ray tracing and want the best possible experience, the RTX 4090 is worth the premium.

**For Content Creators**: The RTX 4090's additional memory and compute power make it ideal for professional workloads.

**For Budget-Conscious Users**: The RTX 4080 offers 78% of the performance at 75% of the price, making it an excellent choice for most users.

## Recommendations

- **Choose RTX 4090 if**: You need maximum performance, work with 8K content, or want future-proofing
- **Choose RTX 4080 if**: You want excellent 4K performance at a more reasonable price point

Both cards represent significant improvements over previous generations and will serve users well for years to come.
    `,
    excerpt: "We compare the flagship graphics cards in real-world gaming scenarios, synthetic benchmarks, and power efficiency tests. Discover which GPU offers the best value for your gaming setup.",
    category: "Hardware",
    author: "Tech Expert",
    publishedAt: new Date('2024-01-15'),
    readTime: "8 min read",
    tags: ["GPU", "Gaming", "Performance", "RTX", "NVIDIA", "Graphics Cards"],
    image: "/api/placeholder/800/400"
  },
  2: {
    id: 2,
    title: "5G Network Security: What You Need to Know",
    content: `
# 5G Network Security: What You Need to Know

As 5G networks continue to roll out globally, understanding the security implications has never been more critical. This comprehensive guide explores the security challenges, vulnerabilities, and best practices for protecting your devices in the new era of connectivity.

## Understanding 5G Security

### What Makes 5G Different?

5G networks introduce several new security considerations compared to previous generations:

- **Network Slicing**: Virtual networks that require new security protocols
- **Edge Computing**: Processing closer to users increases attack surface
- **Massive IoT**: Billions of connected devices create new vulnerabilities
- **Software-Defined Networks**: More flexible but potentially more vulnerable

## Key Security Challenges

### 1. Network Slicing Vulnerabilities

Network slicing allows operators to create virtual networks for different use cases, but this also introduces new attack vectors:

- **Slice Isolation**: Ensuring one slice cannot access another
- **Resource Allocation**: Preventing resource exhaustion attacks
- **Authentication**: Verifying slice access permissions

### 2. Edge Computing Risks

With 5G, more processing happens at the network edge:

- **Physical Security**: Edge locations may have limited physical security
- **Data Privacy**: Sensitive data processed closer to users
- **Supply Chain**: Third-party equipment introduces potential backdoors

### 3. IoT Device Security

The massive scale of IoT devices in 5G networks creates unique challenges:

- **Device Authentication**: Verifying device identity and permissions
- **Firmware Updates**: Ensuring secure over-the-air updates
- **Data Encryption**: Protecting data in transit and at rest

## Common Attack Vectors

### Man-in-the-Middle Attacks

Attackers can intercept communications between devices and the network:

- **Prevention**: Use strong encryption and certificate validation
- **Detection**: Monitor for unusual network behavior
- **Response**: Implement immediate connection termination

### Denial of Service (DoS)

5G networks are vulnerable to various DoS attacks:

- **Signaling Storms**: Overwhelm network with connection requests
- **Resource Exhaustion**: Consume network resources
- **Mitigation**: Implement rate limiting and traffic filtering

### Supply Chain Attacks

Compromised equipment in the supply chain:

- **Hardware Backdoors**: Malicious modifications to hardware
- **Firmware Compromise**: Corrupted firmware updates
- **Prevention**: Source equipment from trusted vendors

## Best Practices for 5G Security

### For Individual Users

1. **Keep Devices Updated**
   - Install security patches promptly
   - Enable automatic updates when possible
   - Verify update authenticity

2. **Use Strong Authentication**
   - Enable two-factor authentication
   - Use strong, unique passwords
   - Consider biometric authentication

3. **Monitor Network Activity**
   - Check for unusual data usage
   - Monitor device connections
   - Review app permissions regularly

### For Organizations

1. **Implement Zero Trust Architecture**
   - Verify every connection attempt
   - Limit access to necessary resources only
   - Monitor all network activity

2. **Regular Security Audits**
   - Assess network vulnerabilities
   - Test incident response procedures
   - Review access controls

3. **Employee Training**
   - Security awareness programs
   - Phishing simulation exercises
   - Incident response training

## Emerging Security Technologies

### AI-Powered Threat Detection

Machine learning algorithms can identify patterns in network traffic:

- **Anomaly Detection**: Identify unusual behavior patterns
- **Predictive Analysis**: Anticipate potential threats
- **Automated Response**: Immediate threat mitigation

### Blockchain for Identity Management

Distributed ledger technology for secure identity verification:

- **Decentralized Identity**: User-controlled digital identities
- **Immutable Records**: Tamper-proof security logs
- **Smart Contracts**: Automated security policy enforcement

## Regulatory Compliance

### GDPR Considerations

European data protection regulations apply to 5G networks:

- **Data Minimization**: Collect only necessary data
- **User Consent**: Clear consent mechanisms
- **Right to Erasure**: Ability to delete personal data

### Industry Standards

Follow established security frameworks:

- **NIST Cybersecurity Framework**: Comprehensive security guidelines
- **ISO 27001**: Information security management
- **3GPP Security Standards**: Mobile network security specifications

## Future Security Trends

### Quantum-Resistant Cryptography

As quantum computing advances, new encryption methods are needed:

- **Post-Quantum Algorithms**: Resistant to quantum attacks
- **Hybrid Systems**: Combine classical and quantum-resistant methods
- **Migration Planning**: Prepare for cryptographic transitions

### Autonomous Security

Self-healing networks that respond to threats automatically:

- **Threat Intelligence**: Real-time threat information sharing
- **Automated Response**: Immediate threat mitigation
- **Learning Systems**: Continuously improve security measures

## Conclusion

5G networks offer incredible opportunities but also introduce new security challenges. By understanding these risks and implementing appropriate security measures, users and organizations can safely leverage the benefits of 5G technology.

The key is to stay informed about emerging threats, regularly update security measures, and maintain a proactive security posture. As 5G technology evolves, so too must our security strategies.

## Key Takeaways

- **Stay Updated**: Keep devices and software current
- **Use Strong Authentication**: Implement multi-factor authentication
- **Monitor Activity**: Watch for unusual network behavior
- **Follow Best Practices**: Adopt security frameworks and guidelines
- **Plan for the Future**: Prepare for emerging security challenges

Remember, security is not a one-time effort but an ongoing process that requires vigilance and adaptation to new threats.
    `,
    excerpt: "Understanding the security implications of 5G networks and how to protect your devices in the new era of connectivity. Learn about potential vulnerabilities and best practices.",
    category: "Networking",
    author: "Network Specialist",
    publishedAt: new Date('2024-01-12'),
    readTime: "6 min read",
    tags: ["5G", "Security", "Networking", "Mobile", "IoT", "Cybersecurity"],
    image: "/api/placeholder/800/400"
  }
};

const relatedPosts = [
  {
    id: 3,
    title: "iOS 18 vs Android 15: Feature Comparison",
    excerpt: "A comprehensive look at the latest mobile operating systems and their new features.",
    category: "Mobile",
    author: "Mobile Analyst",
    publishedAt: new Date('2024-01-10'),
    readTime: "10 min read"
  },
  {
    id: 4,
    title: "Building Scalable Web Applications with Next.js 15",
    excerpt: "Explore the new features in Next.js 15 and learn how to build high-performance applications.",
    category: "Software",
    author: "Developer Advocate",
    publishedAt: new Date('2024-01-08'),
    readTime: "12 min read"
  }
];

interface BlogPostPageProps {
  params: {
    id: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const postId = parseInt(params.id);
  const post = blogPosts[postId as keyof typeof blogPosts];
  
  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Article Header */}
      <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-6">
            <Link
              href={`/categories/${post.category.toLowerCase()}`}
              className="inline-flex items-center px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium rounded-full hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors duration-200"
            >
              {post.category}
            </Link>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-sm">
                  {post.author.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <p className="text-slate-900 dark:text-white font-medium">{post.author}</p>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  {formatDistanceToNow(post.publishedAt, { addSuffix: true })} • {post.readTime}
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors duration-200">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                </svg>
              </button>
              <button className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors duration-200">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <article className="prose prose-slate dark:prose-invert prose-lg max-w-none">
              <div className="mb-8">
                <div className="h-64 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 rounded-xl flex items-center justify-center">
                  <span className="text-slate-500 dark:text-slate-400">Featured Image</span>
                </div>
              </div>
              
              <div className="whitespace-pre-wrap font-sans text-slate-700 dark:text-slate-300 leading-relaxed">
                {post.content}
              </div>
            </article>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm rounded-full hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors duration-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Author Info */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg mb-8">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">About the Author</h3>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">
                    {post.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="text-slate-900 dark:text-white font-medium">{post.author}</p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">Tech Expert & Writer</p>
                </div>
              </div>
            </div>

            {/* Related Posts */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Related Posts</h3>
              <div className="space-y-4">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    href={`/blog/${relatedPost.id}`}
                    className="block group"
                  >
                    <article className="space-y-2">
                      <h4 className="font-medium text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 line-clamp-2">
                        {relatedPost.title}
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                        <span>{relatedPost.category}</span>
                        <span>{relatedPost.readTime}</span>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
