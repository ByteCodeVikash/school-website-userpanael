// import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from "react-router-dom";
import AdmissionModal from '@/components/AdmissionModal';

import { BookOpen, Users, Award, Heart, Star, Trophy, Lightbulb, Target, Sparkles, CheckCircle, GraduationCap, FlaskConical, Brain, Palette, Globe, Music, Drama, Dumbbell, Shield, TrendingUp, Video, Library, Microscope, Quote } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function HomePage() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const features = [
    {
      icon: BookOpen,
      title: t('featureQuality'),
      description: t('featureQualityDesc'),
    },
    {
      icon: Users,
      title: t('featureTeachers'),
      description: t('featureTeachersDesc'),
    },
    {
      icon: Award,
      title: t('featureHolistic'),
      description: t('featureHolisticDesc'),
    },
    {
      icon: Heart,
      title: t('featureChildFriendly'),
      description: t('featureChildFriendlyDesc'),
    },
    {
      icon: Brain,
      title: t('featureCritical'),
      description: t('featureCriticalDesc'),
    },
    {
      icon: Shield,
      title: t('featureSafe'),
      description: t('featureSafeDesc'),
    },
  ];

  const subjects = [
    {
      name: t('subjectEnglish'),
      icon: BookOpen,
      color: 'from-blue-500 to-blue-600',
      description: t('subjectEnglishDesc')
    },
    {
      name: t('subjectHindi'),
      icon: BookOpen,
      color: 'from-orange-500 to-orange-600',
      description: t('subjectHindiDesc')
    },
    {
      name: t('subjectMaths'),
      icon: Target,
      color: 'from-purple-500 to-purple-600',
      description: t('subjectMathsDesc')
    },
    {
      name: t('subjectScience'),
      icon: FlaskConical,
      color: 'from-green-500 to-green-600',
      description: t('subjectScienceDesc')
    },
    {
      name: t('subjectSocial'),
      icon: Globe,
      color: 'from-yellow-500 to-yellow-600',
      description: t('subjectSocialDesc')
    },
    {
      name: t('subjectComputer'),
      icon: Lightbulb,
      color: 'from-cyan-500 to-cyan-600',
      description: t('subjectComputerDesc')
    },
  ];

  const activities = [
    {
      icon: Palette,
      title: t('activityArt'),
      description: t('activityArtDesc'),
      color: 'bg-pink-50 border-pink-200'
    },
    {
      icon: Music,
      title: t('activityMusic'),
      description: t('activityMusicDesc'),
      color: 'bg-purple-50 border-purple-200'
    },
    {
      icon: Dumbbell,
      title: t('activitySports'),
      description: t('activitySportsDesc'),
      color: 'bg-green-50 border-green-200'
    },
    {
      icon: Drama,
      title: t('activityDrama'),
      description: t('activityDramaDesc'),
      color: 'bg-blue-50 border-blue-200'
    },
  ];

  const achievements = [
    {
      icon: Trophy,
      title: t('successRate'),
      stat: '95%',
      description: t('studentsDistinction'),
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Award,
      title: t('stateChampions'),
      stat: '12+',
      description: t('stateWins'),
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Star,
      title: t('culturalAwards'),
      stat: '25+',
      description: t('prizesWon'),
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: GraduationCap,
      title: t('scholarshipWinners'),
      stat: '50+',
      description: t('scholarshipDesc'),
      color: 'from-green-400 to-teal-500'
    },
  ];

  const testimonials = [
    {
      name: t('testimonial1Name'),
      role: t('testimonial1Role'),
      text: t('testimonial1Text'),
      rating: 5
    },
    {
      name: t('testimonial2Name'),
      role: t('testimonial2Role'),
      text: t('testimonial2Text'),
      rating: 5
    },
    {
      name: t('testimonial3Name'),
      role: t('testimonial3Role'),
      text: t('testimonial3Text'),
      rating: 5
    },
  ];

  const facilities = [
    { icon: Library, text: t('library') },
    { icon: Microscope, text: t('scienceLab') },
    { icon: Lightbulb, text: t('computerLab') },
    { icon: Video, text: t('smartClass') },
    { icon: Dumbbell, text: t('sportsGround') },
    { icon: Shield, text: t('security') },
  ];

  const whyChooseUs = [
    {
      title: t('statsIndividual'),
      description: t('statsIndividualDesc'),
      icon: Users,
    },
    {
      title: t('statsAssessment'),
      description: t('statsAssessmentDesc'),
      icon: TrendingUp,
    },
    {
      title: t('statsLifeSkills'),
      description: t('statsLifeSkillsDesc'),
      icon: Brain,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Ultra Modern */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-accent">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=2070')] bg-cover bg-center opacity-20"></div>
        </div>

        {/* Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

          {/* Animated Grid Lines */}
          <div className="absolute inset-0 opacity-5">
            <div className="h-full w-full" style={{
              backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}></div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-white space-y-6">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                  <Sparkles className="h-4 w-4" />
                  <span className="text-sm font-medium">{t('admissionOpen')}</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  {t('shapeYourChilds')}
                  <span className="block text-secondary mt-2">{t('brightFuture')}</span>
                </h1>

                <p className="text-lg opacity-90 leading-relaxed">
                  {t('heroDescription')}
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <AdmissionModal trigger={
                    <Button
                      size="lg"
                      variant="secondary"
                      className="shadow-2xl hover:shadow-3xl transition-all hover:scale-105 text-lg px-8"
                    >
                      {t('applyForAdmission')}
                    </Button>
                  } />

                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white/10 hover:bg-white/20 text-white border-2 border-white shadow-xl transition-all hover:scale-105 text-lg px-8 backdrop-blur-sm"
                    onClick={() => navigate("/contact")}
                  >
                    {t('scheduleAVisit')}
                  </Button>
                </div>

                {/* Quick Stats */}
                <div className="flex flex-wrap gap-8 pt-6">
                  <div>
                    <div className="text-4xl font-bold text-secondary">30+</div>
                    <div className="text-sm opacity-90">{t('yearsExperience')}</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-secondary">500+</div>
                    <div className="text-sm opacity-90">{t('happyStudents')}</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-secondary">30+</div>
                    <div className="text-sm opacity-90">{t('expertTeachers')}</div>
                  </div>
                </div>
              </div>

              {/* Right Content - School Logo Card */}
              <div className="relative">
                <div className="relative">
                  {/* Glowing Card */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl rounded-3xl transform rotate-6"></div>
                  <Card className="relative bg-fluid-water backdrop-blur-xl border-2 border-white/50 shadow-2xl rounded-3xl overflow-hidden">
                    <CardContent className="p-12 text-center">
                      <div className="relative inline-block">
                        <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
                        <img
                          src="https://images.fillout.com/orgid-503168/flowpublicid-5bcjrn1sry/widgetid-default/n95MqABNwZiQVHJwbmNdn5/pasted-image-1763202720427.png"
                          alt="Yoga Convent School Logo"
                          className="h-48 w-48 mx-auto relative z-10 drop-shadow-2xl"
                        />
                      </div>
                      <h2 className="text-3xl font-bold mt-8 mb-3 text-primary">{t('schoolName')}</h2>
                      <p className="text-muted-foreground text-lg mb-6 whitespace-nowrap">{t('schoolTagline')}</p>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-primary/5 rounded-xl p-4">
                          <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                          <div className="text-2xl font-bold text-primary">CBSE</div>
                          <div className="text-xs text-muted-foreground">{t('affiliated')}</div>
                        </div>
                        <div className="bg-primary/5 rounded-xl p-4">
                          <GraduationCap className="h-8 w-8 text-primary mx-auto mb-2" />
                          <div className="text-2xl font-bold text-primary">Class 1-8</div>
                          <div className="text-xs text-muted-foreground">{t('allLevels')}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>


      </section>

      {/* Leadership Section - Director & Principal - OPTIMIZED FOR DESKTOP */}
      <section className="py-8 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-10">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-3">
              {t('ourLeadership')}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">{t('leadershipTitle')}</h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              {t('leadershipSubtitle')}
            </p>
          </div>

          {/* Director Section - Text Left, Image Right */}
          <div className="max-w-6xl mx-auto mb-8">
            <Card className="border-2 hover:shadow-xl transition-all duration-300 overflow-hidden">
              <CardContent className="p-0">
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">{t('managerName')}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {t('manager')}
                  </p>

                  {/* Quote */}
                  <div className="relative bg-gradient-to-br from-accent/5 to-accent/10 rounded-lg p-4 mb-4 border-l-4 border-accent">
                    <Quote className="h-6 w-6 text-accent/30 absolute top-3 right-3" />
                    <p className="text-muted-foreground italic text-sm leading-relaxed relative z-10">
                      "{t('managerQuote')}"
                    </p>
                  </div>

                  {/* Key Highlights - Compact */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="bg-accent/10 p-1.5 rounded-lg">
                        <Heart className="h-4 w-4 text-accent" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm">{t('holisticEducation')}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="bg-accent/10 p-1.5 rounded-lg">
                        <Trophy className="h-4 w-4 text-accent" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm">{t('excellenceAdmin')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Principal Section - Image Left, Text Right */}
          <div className="max-w-6xl mx-auto">
            <Card className="border-2 hover:shadow-xl transition-all duration-300 overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-0 items-center">
                  {/* Image - Left - OPTIMIZED */}
                  <div className="relative h-[280px] md:h-[340px] bg-gradient-to-br from-primary/20 to-primary/5 order-2 md:order-1 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800"
                      alt="Dr. Dilip Kumar Pandey - Principal"
                      className="w-full h-full object-cover object-center"
                      style={{
                        objectPosition: 'center 30%'
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                  </div>

                  {/* Text Content - Right */}
                  <div className="p-6 md:p-8 order-1 md:order-2">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">{t('principalName')}</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {t('principal')}
                    </p>

                    {/* Quote */}
                    <div className="relative bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg p-4 mb-4 border-l-4 border-primary">
                      <Quote className="h-6 w-6 text-primary/30 absolute top-3 right-3" />
                      <p className="text-muted-foreground italic text-sm leading-relaxed relative z-10">
                        "{t('principalQuote')}"
                      </p>
                    </div>

                    {/* Key Highlights - Compact */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="bg-primary/10 p-1.5 rounded-lg">
                          <Award className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold text-sm">{t('yearsEducation')}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="bg-primary/10 p-1.5 rounded-lg">
                          <GraduationCap className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold text-sm">{t('phdEducation')}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      {/* Features Section */}
      <section className="py-4 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              {t('whyChooseUs')}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('whatMakesUsSpecial')}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('specialSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="group border-2 hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-background to-muted/20">
                <CardContent className="p-8">
                  <div className="bg-gradient-to-br from-primary to-accent w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="py-8 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              {t('academicExcellence')}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('comprehensiveCurriculum')}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('curriculumSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {subjects.map((subject, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary overflow-hidden">
                <CardContent className="p-6">
                  <div className={`bg-gradient-to-br ${subject.color} w-20 h-20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-xl`}>
                    <subject.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{subject.name}</h3>
                  <p className="text-muted-foreground text-sm">{subject.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Co-curricular Activities */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              {t('beyondAcademics')}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('coCurricular')}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('coCurricularSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {activities.map((activity, index) => (
              <Card key={index} className={`${activity.color} border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}>
                <CardContent className="p-6 text-center">
                  <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg">
                    <activity.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{activity.title}</h3>
                  <p className="text-sm text-muted-foreground">{activity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-10 bg-gradient-to-br from-primary via-primary/95 to-accent text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('ourAchievements')}</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              {t('achievementsSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {achievements.map((achievement, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-lg border-2 border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <CardContent className="p-8 text-center text-white">
                  <div className={`bg-gradient-to-br ${achievement.color} w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto shadow-xl`}>
                    <achievement.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-5xl font-bold mb-2">{achievement.stat}</div>
                  <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                  <p className="text-sm opacity-90">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  {t('worldClassInfra')}
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('modernFacilities')}</h2>
                <p className="text-xl text-muted-foreground mb-8">
                  {t('facilitiesDesc')}
                </p>

                <div className="space-y-4">
                  {facilities.map((facility, index) => (
                    <div key={index} className="flex items-start gap-4 bg-muted/50 p-4 rounded-xl hover:bg-muted transition-colors">
                      <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                        <facility.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="pt-2">
                        <p className="font-semibold text-lg">{facility.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <Card className="bg-gradient-to-br from-blue-500 to-blue-600 border-none shadow-lg hover:shadow-2xl transition-all hover:scale-105">
                  <CardContent className="p-6 md:p-8 text-center">
                    <Library className="h-10 w-10 md:h-12 md:w-12 mx-auto mb-3 md:mb-4 text-white" />
                    <div className="text-3xl md:text-4xl font-bold mb-2 text-white">5000</div>
                    <div className="text-xs md:text-sm text-white/90 font-medium">{t('booksInLib')}</div>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-green-500 to-green-600 border-none shadow-lg hover:shadow-2xl transition-all hover:scale-105">
                  <CardContent className="p-6 md:p-8 text-center">
                    <Microscope className="h-10 w-10 md:h-12 md:w-12 mx-auto mb-3 md:mb-4 text-white" />
                    <div className="text-3xl md:text-4xl font-bold mb-2 text-white">2</div>
                    <div className="text-xs md:text-sm text-white/90 font-medium">{t('scienceLabs')}</div>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-purple-500 to-purple-600 border-none shadow-lg hover:shadow-2xl transition-all hover:scale-105">
                  <CardContent className="p-6 md:p-8 text-center">
                    <Video className="h-10 w-10 md:h-12 md:w-12 mx-auto mb-3 md:mb-4 text-white" />
                    <div className="text-3xl md:text-4xl font-bold mb-2 text-white">15+</div>
                    <div className="text-xs md:text-sm text-white/90 font-medium">{t('smartClasses')}</div>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-orange-500 to-orange-600 border-none shadow-lg hover:shadow-2xl transition-all hover:scale-105">
                  <CardContent className="p-6 md:p-8 text-center">
                    <Shield className="h-10 w-10 md:h-12 md:w-12 mx-auto mb-3 md:mb-4 text-white" />
                    <div className="text-3xl md:text-4xl font-bold mb-2 text-white">24/7</div>
                    <div className="text-xs md:text-sm text-white/90 font-medium">{t('security')}</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Extended */}
      <section className="py-8 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('yogaConventAdvantage')}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('advantageSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="border-2 hover:border-primary hover:shadow-xl transition-all">
                <CardContent className="p-8 text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-2 max-w-6xl mx-auto">
            <CardContent className="p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-6">{t('readyToJoin')}</h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    {t('scheduleVisitDesc')}
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>{t('freeTour')}</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>{t('meetTeachers')}</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>{t('feeDiscussion')}</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-2xl p-8 shadow-xl">
                  <h4 className="text-2xl font-bold mb-6">{t('contactInfo')}</h4>
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">{t('phone')}</div>
                      <div className="text-lg font-semibold">+91-9415981641</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">{t('email')}</div>
                      <div className="text-lg font-semibold">info@yogaconvent.edu</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">{t('timings')}</div>
                      <div className="text-lg font-semibold">Mon-Sat, 9:00 AM - 2:00 PM</div>
                    </div>
                  </div>
                  <Button className="w-full mt-6" size="lg" onClick={() => navigate("/contact")}>
                    {t('scheduleVisit')}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              {t('parentTestimonials')}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('whatParentsSay')}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('parentsSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic leading-relaxed text-lg">"{testimonial.text}"</p>
                  <div className="border-t pt-4">
                    <p className="font-bold text-lg">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-accent text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <Sparkles className="h-16 w-16 mx-auto mb-6 animate-pulse" />
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              {t('enrollToday')}
            </h2>
            <p className="text-xl md:text-2xl mb-4 opacity-95">
              {t('limitedSeats')}
            </p>
            <p className="text-lg mb-10 opacity-90 max-w-2xl mx-auto leading-relaxed">
              {t('enrollDesc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                variant="secondary"
                className="shadow-2xl hover:shadow-3xl transition-all hover:scale-105 text-lg px-10 py-6"
                onClick={() => navigate("/contact")}
              >
                {t('applyNow')}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 hover:bg-white/20 text-white border-2 border-white shadow-xl transition-all hover:scale-105 text-lg px-10 py-6 backdrop-blur-sm"
                onClick={() => navigate("/contact")}
              >
                {t('downloadProspectus')}
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-8 pt-8 border-t border-white/20">
              <div className="text-center">
                <Award className="h-10 w-10 mx-auto mb-2" />
                <div className="text-sm opacity-90">{t('cbseAffiliated')}</div>
              </div>
              <div className="text-center">
                <Shield className="h-10 w-10 mx-auto mb-2" />
                <div className="text-sm opacity-90">{t('safeCampus')}</div>
              </div>
              <div className="text-center">
                <Trophy className="h-10 w-10 mx-auto mb-2" />
                <div className="text-sm opacity-90">{t('awardWinning')}</div>
              </div>
              <div className="text-center">
                <Heart className="h-10 w-10 mx-auto mb-2" />
                <div className="text-sm opacity-90">{t('caringFaculty')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
