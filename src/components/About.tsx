import React from 'react';
import { personalInfo } from '@/data/personal';
import { Card, CardContent } from '@/components/ui/card';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        {/* 标题 */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            关于我
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* 内容卡片 */}
        <Card className="max-w-4xl mx-auto border-2 hover:shadow-lg transition-shadow">
          <CardContent className="p-6 md:p-10">
            <div className="prose prose-lg max-w-none">
              {personalInfo.about.split('\n\n').map((paragraph, index) => (
                <p
                  key={index}
                  className="text-foreground/90 leading-relaxed mb-6 last:mb-0 text-base md:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
