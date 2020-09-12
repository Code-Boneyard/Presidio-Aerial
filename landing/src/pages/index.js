import React from "react"
import SEO from '../components/seo';
import Layout from '../containers/layout/layout'
import Hero from '../containers/home-video/hero'
import Story from '../containers/home-video/story'
import ProjectSection from '../containers/home-video/project'
import TestimonialSection from '../containers/home-video/testimonial'
import BlogSection from '../containers/home-video/blog'
import JoinOurTeam from '../containers/company/join-our-team'

export default () => (
    <Layout headerLayout={2}>
        <SEO title="Presidio Aerial Solutions - San Francisco Drone Photography and Stock Media"/>
        <Hero/>
        <Story/>
        <ProjectSection/>
        <TestimonialSection/>
        <JoinOurTeam/>
        <BlogSection/>
    </Layout>)