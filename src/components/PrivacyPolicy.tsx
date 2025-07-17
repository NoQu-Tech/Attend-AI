import React from 'react';
import { ArrowLeft, Shield, Eye, Lock, Database, Users, FileText } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
  const sections = [
    {
      icon: Database,
      title: 'Information We Collect',
      content: [
        'Full Name',
        'Phone Number', 
        'Email Address',
        'Company Name',
        'City',
        'This information helps us provide tailored services and support through the Attend AI platform.'
      ]
    },
    {
      icon: Eye,
      title: 'How We Use Your Information',
      content: [
        'All data collected through Attend AI is used exclusively for NoQu\'s internal business purposes',
        'Delivering and improving our time and attendance management solutions',
        'Communicating with you about product updates, support, or promotions',
        'Understanding user behavior and preferences to enhance your experience',
        'Generating insights and reports for organizational needs',
        'We do NOT sell, rent, or share your personal data with any third parties for advertising or marketing purposes.'
      ]
    },
    {
      icon: Lock,
      title: 'Data Management & Security',
      content: [
        'All information is securely stored and managed directly by NoQu',
        'Role-based access control',
        'Encrypted storage and secure servers',
        'Regular security audits',
        'Adherence to IT and data protection laws'
      ]
    },
    {
      icon: Users,
      title: 'Your Rights',
      content: [
        'You have the right to access, update, or request deletion of your personal data',
        'If you wish to do so, please contact us at support@attendai.in'
      ]
    },
    {
      icon: FileText,
      title: 'Policy Updates',
      content: [
        'We may revise this Privacy Policy as needed',
        'All updates will be published on this page with an updated effective date'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>
          
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-cyan-100 border border-blue-200 rounded-full px-6 py-2 mb-6">
              <Shield className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 text-sm font-medium">Privacy & Security</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <p className="text-sm text-gray-500">
              Last updated: January 2025
            </p>
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-white border border-gray-200 rounded-3xl p-8 mb-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            At Attend AI, your privacy matters to us. Attend AI is developed, operated, and managed entirely by NoQu (NoQu Technologies Private Limited), 
            accessible at www.noqu.in. All data collected through the platform is handled directly by NoQu and used strictly for NoQu's own operational purposes, 
            in full compliance with applicable data protection laws.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-3xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
                  <section.icon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
              </div>
              
              <ul className="space-y-3">
                {section.content.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Sections */}
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-bold text-gray-900">Contact Us</h3>
            </div>
            <div className="text-gray-700 space-y-2">
              <p>For questions or concerns about this Privacy Policy or how your data is handled, please reach out to us at support@attendai.in</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-3xl p-8 mt-8 text-center">
          <p className="text-gray-700 text-center">
            For questions or concerns about this Privacy Policy or how your data is handled, please reach out to us at <strong>support@attendai.in</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;