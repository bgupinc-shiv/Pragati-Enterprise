import React from 'react';

const PolicyLayout = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="pt-32 pb-20 max-w-4xl mx-auto px-4">
    <h1 className="text-4xl font-bold text-primary italic mb-12 text-center">{title}</h1>
    <div className="prose prose-stone lg:prose-lg max-w-none bg-white p-8 md:p-12 rounded-4xl shadow-sm border border-gray-50 text-gray-600 leading-relaxed space-y-6 italic">
      {children}
    </div>
  </div>
);

export function Privacy() {
  return (
    <PolicyLayout title="Privacy Policy">
      <p>Your privacy is important to us. It is Pragati Enterprise's policy to respect your privacy regarding any information we may collect from you across our website.</p>
      <h3 className="text-primary font-bold">1. Information We Collect</h3>
      <p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent.</p>
      <h3 className="text-primary font-bold">2. Use of Information</h3>
      <p>We only retain collected information for as long as necessary to provide you with your requested service (like processing an order or sending updates).</p>
      <h3 className="text-primary font-bold">3. Third Party Sharing</h3>
      <p>We do not share any personally identifying information with third-parties, except when required by law or to process your payments and shipping.</p>
    </PolicyLayout>
  );
}

export function Return() {
  return (
    <PolicyLayout title="Return Policy">
      <p>We want you to be 100% satisfied with your purchase. If you're not, we're here to help.</p>
      <h3 className="text-primary font-bold">1. Returns</h3>
      <p>You have 7 calendar days to return an item from the date you received it. To be eligible for a return, your item must be unused and in the same condition that you received it.</p>
      <h3 className="text-primary font-bold">2. Refunds</h3>
      <p>Once we receive your item, we will inspect it and notify you that we have received your returned item. We will immediately notify you on the status of your refund after inspecting the item.</p>
      <h3 className="text-primary font-bold">3. Shipping</h3>
      <p>Shipping costs for returns are non-refundable unless the return is due to a quality issue from our end.</p>
    </PolicyLayout>
  );
}

export function Terms() {
  return (
    <PolicyLayout title="Terms & Conditions">
      <p>By accessing our website, you are agreeing to be bound by these terms of service, all applicable laws and regulations.</p>
      <h3 className="text-primary font-bold">1. Use License</h3>
      <p>Permission is granted to temporarily download one copy of the materials on Pragati Enterprise's website for personal, non-commercial transitory viewing only.</p>
      <h3 className="text-primary font-bold">2. Disclaimer</h3>
      <p>The materials on Pragati Enterprise's website are provided on an 'as is' basis. Pragati Enterprise makes no warranties, expressed or implied.</p>
      <h3 className="text-primary font-bold">3. Product Accuracy</h3>
      <p>The materials appearing on Pragati Enterprise's website could include technical, typographical, or photographic errors. We do our best to ensure accuracy but do not guarantee it.</p>
    </PolicyLayout>
  );
}
