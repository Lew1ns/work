import React from 'react';
import { personalInfo } from '@/data/personal';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* 版权信息 */}
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {currentYear} {personalInfo.name} 的赛博空间. All rights reserved.
          </p>

          {/* 快速链接 */}
          <div className="flex items-center gap-6">
            <a
              href={`mailto:${personalInfo.contact.email}`}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              邮箱
            </a>
            <a
              href={personalInfo.contact.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
