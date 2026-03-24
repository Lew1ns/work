import React from 'react';
import { personalInfo } from '@/data/personal';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Github } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        {/* 标题 */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            联系方式
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* 联系方式卡片 */}
        <Card className="max-w-2xl mx-auto border-2 hover:shadow-lg transition-shadow">
          <CardContent className="p-6 md:p-10">
            <div className="space-y-6">
              {/* 邮箱 */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="flex items-center gap-3 flex-1">
                  <Mail className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">邮箱</p>
                    <p className="text-base md:text-lg font-medium">{personalInfo.contact.email}</p>
                  </div>
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="w-full sm:w-auto"
                >
                  <a href={`mailto:${personalInfo.contact.email}`}>
                    发送邮件
                  </a>
                </Button>
              </div>

              {/* 分隔线 */}
              <div className="border-t border-border" />

              {/* GitHub */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="flex items-center gap-3 flex-1">
                  <Github className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">GitHub</p>
                    <p className="text-base md:text-lg font-medium">{personalInfo.contact.github}</p>
                  </div>
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="w-full sm:w-auto"
                >
                  <a
                    href={personalInfo.contact.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    访问主页
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
