import { MapPin, Code2, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 lg:py-32 bg-bg-primary"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section heading */}
        <div className="max-w-2xl mb-14">
          <p className="text-sm font-medium tracking-wide text-gold mb-4">
            ABOUT
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-text-primary leading-tight">
            A software engineer who grew into the whole process.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

          {/* Story */}
          <div className="lg:col-span-7">

            <div className="space-y-6 text-base sm:text-lg leading-relaxed text-text-secondary">

              <p>
                I started my career as a software developer, focused mainly
                on understanding problems and turning them into working
                applications. Over time, my role grew beyond writing code.
              </p>

              <p>
                Today, I work across the full delivery process: understanding
                requirements, designing systems, building applications,
                working with APIs and databases, deploying to production, and
                supporting the people who use what we build.
              </p>

              <p>
                Much of my experience has come from building software for
                real businesses and organizations. That has taught me to think
                about things that are easy to overlook in development:
                unreliable internet, multilingual users, payments, hosting,
                data synchronization, and what happens after an application
                goes live.
              </p>

              <p>
                At Ahaz Solutions, I now combine hands-on development with
                project leadership and mentorship. I still write code, but I
                also help move projects from an idea to something people can
                actually use.
              </p>

            </div>

            {/* Location */}
            <div className="mt-10 pt-6 border-t border-border flex items-center gap-2 text-sm text-text-muted">
              <MapPin className="w-4 h-4 text-gold" />
              <span>{PERSONAL_INFO.location}</span>
            </div>
          </div>

          {/* Supporting information */}
          <div className="lg:col-span-5">

            <div className="border-t border-border">

              {/* Experience */}
              <div className="py-6 border-b border-border">
                <div className="flex items-start justify-between gap-6">

                  <div>
                    <p className="text-sm text-text-muted">
                      Experience
                    </p>

                    <p className="mt-2 text-3xl font-display font-bold text-text-primary">
                      3+
                    </p>
                  </div>

                  <Code2 className="w-5 h-5 text-gold" />
                </div>

                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  Years building and delivering production software.
                </p>
              </div>

              {/* Education */}
              <div className="py-6 border-b border-border">
                <p className="text-sm text-text-muted">
                  Education
                </p>

                <p className="mt-2 text-lg font-semibold text-text-primary">
                  BSc Software Engineering
                </p>

                <p className="mt-1 text-sm text-text-secondary">
                  GPA 3.94 / 4.00
                </p>
              </div>

              {/* Current role */}
              <div className="py-6 border-b border-border">
                <p className="text-sm text-text-muted">
                  Currently
                </p>

                <p className="mt-2 text-lg font-semibold text-text-primary">
                  Full-Stack Developer & Project Lead
                </p>

                <p className="mt-1 text-sm text-text-secondary">
                  Ahaz Electronic & Software Solutions
                </p>
              </div>

              {/* More */}
              <div className="pt-6">
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 text-sm font-medium text-text-primary hover:text-gold transition-colors"
                >
                  See what I've built
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}