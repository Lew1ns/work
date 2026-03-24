import React from 'react';
import { personalInfo } from '@/data/personal';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  // 滚动到关于我区域
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative gradient-bg"
    >
      <div className="container mx-auto px-4 md:px-6 text-center">
        {/* 主标题 */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
          <span className="gradient-text">{personalInfo.title}</span>
        </h1>

        {/* 副标题 */}
        <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 animate-fade-in max-w-2xl mx-auto">
          {personalInfo.subtitle}
        </p>

        {/* 行动按钮 */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <Button
            size="lg"
            onClick={scrollToAbout}
            className="text-base md:text-lg px-8 py-6"
          >
            了解更多
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="text-base md:text-lg px-8 py-6"
          >
            联系我
          </Button>
        </div>
      </div>

      {/* 滚动提示 */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground hover:text-primary transition-colors"
        aria-label="向下滚动"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
};

export default Hero;
