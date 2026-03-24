import React from 'react';
import { projects } from '@/data/projects';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 md:py-32 gradient-bg">
      <div className="container mx-auto px-4 md:px-6">
        {/* 标题 */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            项目展示
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* 项目卡片网格 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="border-2 hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl text-primary">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* 项目概述 */}
                <div>
                  <h4 className="font-semibold text-foreground mb-2">项目概述</h4>
                  <p className="text-foreground/80 text-sm md:text-base leading-relaxed">
                    {project.overview}
                  </p>
                </div>

                {/* 技术栈 */}
                <div>
                  <h4 className="font-semibold text-foreground mb-2">技术栈</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs md:text-sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* 核心职责 */}
                <div>
                  <h4 className="font-semibold text-foreground mb-2">核心职责</h4>
                  <p className="text-foreground/80 text-sm md:text-base leading-relaxed">
                    {project.responsibilities}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
