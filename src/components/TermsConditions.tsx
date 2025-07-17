import React from 'react';
import { ArrowLeft, FileText, Scale, Shield, AlertTriangle, Users, Clock } from 'lucide-react';

interface TermsConditionsProps {
  onBack: () => void;
}

const TermsConditions: React.FC<TermsConditionsProps> = ({ onBack }) => {
  const sections = [
    {
      icon: Users,
      title: 'Acceptance of Terms',
      content: [
        'By using Attend AI or signing up for any demos, trials, or paid services, you accept these Terms and Conditions',
        'If you do not agree, please do not use the platform'
      ]
    },
    {
      icon: Shield,
      title: 'Services Offered',
      content: [
        'Attend AI markets and enables access to NoQu TAM, which includes:',
        'Time and Attendance Management System',
        'Biometric and Device Integration',
        'Web and Mobile App Access',
        'Reports and Workforce Analytics',
        'All services are subject to change, updates, or discontinuation at the discretion of NoQu'
      ]
    },
    {
      icon: Scale,
      title: 'User Responsibilities',
      content: [
        'Provide accurate and complete information during onboarding',
        'Use the service only for lawful business purposes',
        'Not misuse, resell, or reverse-engineer any part of the software'
      ]
    },
    {
      icon: Clock,
      title: 'Payment & Subscription',
      content: [
        'Any fees, subscriptions, or payments made through Attend AI are directly processed under NoQu Technologies Private Limited',
        'Invoices, billing, and renewals are governed by NoQu\'s financial policies'
      ]
    },
    {
      icon: FileText,
      title: 'Intellectual Property',
      content: [
        'All content, design, software, trademarks, and branding—whether under Attend AI or NoQu—are the intellectual property of NoQu Technologies Private Limited',
        'Unauthorized use is strictly prohibited'
      ]
    },
    {
      icon: AlertTriangle,
      title: 'Limitation of Liability',
      content: [
        'NoQu is not liable for:',
        'Downtime or temporary service interruption',
        'User errors or misuse of the platform',
        'Indirect or consequential damages arising from the use of the service'
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
              <FileText className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 text-sm font-medium">Legal Terms</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Terms & Conditions
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Please read these terms carefully before using our services.
            </p>
            <p className="text-sm text-gray-500">
              Last updated: January 2025
            </p>
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-white border border-gray-200 rounded-3xl p-8 mb-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Relationship Between Attend AI and NoQu</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Attend AI</strong> is a product identity created to promote and market <strong>NoQu TAM (Time & Attendance Management)</strong> — 
            a proprietary software solution owned and operated by <strong>NoQu Technologies Private Limited</strong>.
          </p>
          <p className="text-gray-700 leading-relaxed">
            While the brand Attend AI is used for outreach and communication, all products, services, billing, and support are legally managed by 
            <strong> NoQu Technologies Private Limited</strong>. All transactions, licenses, and service agreements initiated via Attend AI are considered as agreements with NoQu.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Official website: <a href="https://www.noqu.in" className="text-blue-600 hover:underline">www.noqu.in</a>
          </p>
        </div>

        {/* Main Sections */}
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

        {/* Additional Terms */}
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-bold text-gray-900">Data Privacy</h3>
            </div>
            <div className="text-gray-700">
              <p>Data collected via Attend AI is handled by NoQu and is governed by the Privacy Policy. We comply with applicable data protection laws and industry standards.</p>
            </div>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-bold text-gray-900">Governing Law</h3>
            </div>
            <div className="text-gray-700 space-y-2">
              <p>These terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of the courts of India.</p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-3xl p-8 mt-8 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Contact</h3>
          <p className="text-gray-700 mb-6">
            For questions or concerns regarding these Terms and Conditions, please contact us at:
          </p>
          <p className="text-gray-700 font-semibold">📧 support@attendai.in</p>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;