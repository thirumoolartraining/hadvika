import { useParams, useNavigate } from 'react-router-dom';

type LegalPageType = 'privacy-policy' | 'terms-and-conditions' | 'shipping-policy' | 'cancellation-and-refund';

const LegalPage = () => {
  const { page } = useParams<{ page: LegalPageType }>();
  const navigate = useNavigate();
  const pageType = page as LegalPageType;
  const getContent = () => {
    switch (pageType) {
      case 'privacy-policy':
        return {
          title: 'Privacy Policy',
          content: (
            <div className="prose prose-lg max-w-none">
              <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
              <p className="text-xl text-gray-700 mb-8">
                Your Trust. Our Commitment to Data Responsibility.
              </p>
              
              <p className="mb-6">
                At Hadvika Traders, your privacy and data security are paramount. As a global distributor of Arun Ice Creams, 
                we work with international clients across the Gulf, Middle East, and Africa, and we understand the 
                importance of handling personal and business information with the highest standards of care and compliance.
              </p>

              <p className="mb-6">
                This Privacy Policy outlines how we collect, use, protect, and share your data in the course of 
                providing world-class B2B export services.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
              <p className="mb-4">
                We collect only the information necessary to fulfill business obligations and provide seamless communication and service.
              </p>

              <h3 className="text-lg font-medium mt-4 mb-2">Information you provide directly:</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Company name, representative name(s)</li>
                <li>Business email address and contact number</li>
                <li>Shipping and billing addresses</li>
                <li>Tax ID / GST number (if applicable)</li>
                <li>Any other relevant information shared through our forms or correspondence</li>
              </ul>

              <h3 className="text-lg font-medium mt-4 mb-2">Information we collect automatically:</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>IP address and location (for security and analytics)</li>
                <li>Browser/device type</li>
                <li>Pages visited on our website</li>
                <li>Time spent and interactions for performance tracking</li>
              </ul>

              <p className="mb-6">
                We do not collect sensitive personal information such as financial details directly through our website. 
                All transactions are coordinated through secure offline or third-party platforms.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
              <p className="mb-4">Your data enables us to:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Process and manage wholesale orders</li>
                <li>Coordinate export documentation and logistics</li>
                <li>Respond to inquiries and support requests</li>
                <li>Offer tailored business solutions and bulk pricing</li>
                <li>Maintain compliance with shipping, trade, and legal regulations</li>
                <li>Send relevant updates, order confirmations, or promotional information (opt-in basis only)</li>
              </ul>
              
              <p className="mb-6">
                We never sell your data to third parties. All data use is limited to fulfilling our contractual 
                obligations and improving your service experience.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">3. Data Storage & Protection</h2>
              <p className="mb-4">
                We implement robust digital safeguards to protect your information, including:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>SSL encryption on our website</li>
                <li>Role-based access to sensitive data</li>
                <li>Secure third-party tools with GDPR/DPDP compliance</li>
                <li>Periodic audits of data access and handling protocols</li>
              </ul>
              <p className="mb-6">
                All data is stored on secure cloud infrastructure and retained only as long as necessary 
                for legal, operational, or archival reasons.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">4. Third-Party Sharing</h2>
              <p className="mb-4">
                We may share information only with trusted third parties for the purpose of completing your orders or 
                supporting business operations, including:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Logistics and cold chain partners</li>
                <li>Export documentation agents</li>
                <li>Web hosting or email communication services</li>
              </ul>
              <p className="mb-6">
                Each of these partners is vetted for security compliance, and data is shared strictly on a need-to-know basis.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">5. International Compliance</h2>
              <p className="mb-4">
                As a company operating across international borders, we adhere to applicable data privacy regulations in:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>India (Information Technology Act, 2000)</li>
                <li>Gulf Cooperation Council (GCC) privacy standards</li>
                <li>General Data Protection Regulation (GDPR), where relevant</li>
              </ul>
              <p className="mb-6">
                We respect your rights under these laws, including access, rectification, and deletion of your personal data.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">6. Cookies & Tracking Technologies</h2>
              <p className="mb-4">
                Our website may use limited cookies for functionality and analytics. These include:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Session cookies to remember user inputs during visits</li>
                <li>Analytics cookies (e.g., Google Analytics) to improve site performance</li>
              </ul>
              <p className="mb-6">
                By using our website, you consent to the use of such cookies. You can manage or disable cookies via your browser settings.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">7. Your Rights & Choices</h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Request access to any personal information we hold</li>
                <li>Ask for correction or deletion of inaccurate data</li>
                <li>Opt-out of marketing communications at any time</li>
              </ul>
              <p className="mb-6">
                To exercise these rights, please contact us at the email addresses below.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">8. Updates to This Policy</h2>
              <p className="mb-6">
                We may update this Privacy Policy periodically to reflect changes in our operations or legal requirements. 
                The updated policy will be available on our website with a revised "Last Updated" date.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">9. Contact Us</h2>
              <p className="mb-2">If you have questions about your data, or need support regarding privacy, reach out to us:</p>
              <ul className="list-disc pl-6 mb-6 space-y-1">
                <li>Email: info@hadvikatraders.biz</li>
                <li>Address: 3/32, BALAJI LAYOUT, SABARI STREET, BINNY COMPOUND, Tiruppur, Tiruppur, Tamil Nadu, 641602</li>
                <li>Phone: +91 9944311934</li>
              </ul>

              <p className="mt-8">
                Thank you for trusting Hadvika Traders. We're committed to serving you with integrity, 
                both in quality products and responsible data practices.
              </p>
            </div>
          )
        };

      case 'terms-and-conditions':
        return {
          title: 'Terms & Conditions',
          content: (
            <div className="prose prose-lg max-w-none">
              <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>
              
              <p className="mb-6">
                Welcome to Hadvika Traders. By accessing and using our website (www.hadvikatraders.biz), or engaging with our services as a wholesale partner or client, you agree to comply with and be bound by the following Terms and Conditions.
              </p>

              <p className="mb-6">
                These terms govern all transactions, communications, and export services facilitated through our digital platforms and offline channels. Please read them carefully before initiating any business interaction.
              </p>

              <p className="mb-8">
                Continued use of our website or services implies full acceptance of these terms. If you do not agree, kindly refrain from proceeding further.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">1. General Use of the Website and Services</h2>
              <p className="mb-4">
                By engaging with Hadvika Traders through our site or trade channels, you confirm that you are either:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Legally authorized to represent a business entity, or</li>
                <li>Of legal age (18+) and capable of entering binding commercial agreements.</li>
              </ul>
              <p className="mb-6">
                You agree to use our services in a manner that is lawful, non-abusive, and respectful of our team, platform, and systems.
              </p>
              <p className="mb-6">
                Hadvika Traders reserves the right to refuse or terminate services at our discretion, especially in cases of suspected fraud, data misuse, or violation of trade agreements.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">2. Product Information, Pricing & Availability</h2>
              <p className="mb-4">
                All products listed—including Arun Ice Cream SKUs—are subject to availability and seasonal production cycles. Pricing, specifications, and packaging may be updated without prior notice, particularly for export shipments influenced by:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Regulatory changes</li>
                <li>Supply chain costs</li>
                <li>Port/customs compliance</li>
                <li>Country-specific labeling or certifications</li>
              </ul>
              <p className="mb-6">
                We strive to keep all catalog listings accurate; however, inadvertent errors may occur. Hadvika Traders reserves the right to cancel or revise quotations or orders based on verified discrepancies.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">3. Payment Terms</h2>
              <p className="mb-4">
                Unless otherwise agreed upon in writing, all orders must be prepaid in full prior to production or dispatch. Accepted payment methods include:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>International Wire Transfers</li>
                <li>Letters of Credit (L/C), where applicable</li>
                <li>UPI/Net Banking (for domestic clients)</li>
                <li>Other verified trade finance solutions</li>
              </ul>
              <p className="mb-6">
                All payments must be made to the official bank account provided on our invoice or quotation.
              </p>
              <p className="mb-6">
                We never request payment via personal accounts or third-party intermediaries.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">4. Shipping & Delivery</h2>
              <p className="mb-4">
                We coordinate global shipments using export-grade cold chain logistics and certified freight providers. Delivery timelines vary based on destination, order volume, and regulatory processes.
              </p>
              <p className="mb-4">
                Typical lead times:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Gulf / Middle East: 2–4 weeks</li>
                <li>Africa: 3–6 weeks</li>
                <li>Other: case-dependent</li>
              </ul>
              <p className="mb-6">
                Shipping Incoterms (e.g., FOB, CIF) will be clearly stated in every quotation or contract.
              </p>
              <p className="mb-6">
                Hadvika Traders is not liable for delays caused by force majeure events (port strikes, customs holds, extreme weather, etc.), but we will proactively assist in resolution and communication.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">5. Client Responsibilities</h2>
              <p className="mb-4">
                Clients are responsible for:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Providing accurate shipping and customs documentation</li>
                <li>Ensuring legal importability of frozen dairy goods in their country</li>
                <li>Arranging for local permits, duties, and cold storage facilities (if not contracted through us)</li>
              </ul>
              <p className="mb-6">
                Failure to comply with import regulations may result in shipment holds, penalties, or product damage—for which Hadvika Traders cannot be held liable.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">6. Intellectual Property</h2>
              <p className="mb-6">
                All content on our website—branding, product images, documentation—is the intellectual property of Hadvika Traders or used under license from Arun Ice Creams (Hatsun Agro Product Ltd.).
              </p>
              <p className="mb-6">
                Unauthorized use, reproduction, or distribution without written permission is strictly prohibited.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">7. Amendments to Terms</h2>
              <p className="mb-6">
                We may revise these Terms & Conditions periodically to reflect operational, legal, or market changes. Any updates will be posted on our website with a new effective date.
              </p>
              <p className="mb-6">
                Your continued business engagement implies acceptance of these updates.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">8. Limitation of Liability</h2>
              <p className="mb-4">
                Hadvika Traders is not responsible for:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Third-party shipping delays or cold chain breaches after dispatch</li>
                <li>Regulatory seizures, customs penalties, or damages outside India</li>
                <li>Business losses resulting from order cancellation, delay, or misunderstanding not covered under formal agreement</li>
              </ul>
              <p className="mb-6">
                Our total liability, if proven, will be limited to the invoiced amount for the affected order.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">9. Governing Law & Jurisdiction</h2>
              <p className="mb-6">
                All agreements and disputes shall be governed by the laws of India. Jurisdiction for any legal proceedings will be in Coimbatore, Tamil Nadu, unless otherwise agreed in writing.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">10. Contact Information</h2>
              <p className="mb-4">
                For all inquiries regarding trade, compliance, support, or legal matters:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <p className="font-semibold">Hadvika Traders</p>
                <p>3/32, BALAJI LAYOUT, SABARI STREET, BINNY<br />
                COMPOUND, Tiruppur, Tiruppur, Tamil Nadu, 641602</p>
                <p className="mt-2">Website: <a href="https://www.hadvikatraders.biz" className="text-blue-600 hover:underline">www.hadvikatraders.biz</a></p>
                <p>Phone: <a href="tel:+919944311934" className="text-blue-600 hover:underline">+91 9944311934</a></p>
                <p>Email: <a href="mailto:info@hadvikatraders.biz" className="text-blue-600 hover:underline">info@hadvikatraders.biz</a></p>
              </div>
              <p>
                We shall not be liable for any indirect, incidental, special, consequential, or 
                punitive damages resulting from your use of our services.
              </p>
            </div>
          )
        };

      case 'shipping-policy':
        return {
          title: 'Shipping Policy',
          content: (
            <div className="prose prose-lg max-w-none">
              <h1 className="text-3xl font-bold mb-6">Shipping Policy</h1>
              <p className="text-xl text-gray-700 mb-8">
                Cold Chain Precision. Global Reach. Guaranteed Reliability.
              </p>
              
              <p className="mb-6">
                At Hadvika Traders, we are committed to ensuring that every shipment—whether across the Gulf, Africa, or beyond—arrives in perfect condition. As an authorized distributor of Arun Ice Creams, we combine best-in-class cold storage systems with export-grade logistics to uphold freshness, compliance, and delivery integrity.
              </p>

              <p className="mb-8">
                This Shipping Policy outlines the procedures, expectations, and timelines for domestic and international orders.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Order Processing & Cold Storage Handling</h2>
              <p className="mb-4">
                Once your order is confirmed and payment is received, the fulfillment process begins:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Processing Time:</strong> 3–7 business days</li>
                <li><strong>Includes:</strong> Inventory allocation, temperature-controlled packaging, route coordination</li>
                <li><strong>Cold Chain Integrity:</strong> Ice creams are stored and packed at optimal sub-zero conditions using insulated containers, dry ice/gel packs, and thermal liners as needed.</li>
              </ul>
              <p className="mb-8">
                Custom orders, private label packaging, or consolidated export loads may require extended lead times. Your account manager will communicate any specific timelines in advance.
              </p>
              <h2 className="text-2xl font-semibold mt-8 mb-4">Shipping Regions & Delivery Timelines</h2>
              <p className="mb-4">
                We currently serve international B2B clients across the following regions:
              </p>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full bg-white border border-gray-200">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="py-2 px-4 border-b border-gray-200 text-left">Region</th>
                      <th className="py-2 px-4 border-b border-gray-200 text-left">Estimated Delivery Time (Post Dispatch)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200">Gulf Countries</td>
                      <td className="py-2 px-4 border-b border-gray-200">2–4 weeks</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200">Middle East (Non-Gulf)</td>
                      <td className="py-2 px-4 border-b border-gray-200">3–5 weeks</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200">Africa</td>
                      <td className="py-2 px-4 border-b border-gray-200">4–6 weeks</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200">Other (By request)</td>
                      <td className="py-2 px-4 border-b border-gray-200">Case-specific, based on country regulations</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mb-8 text-sm text-gray-600">
                Note: Timelines may vary based on container availability, customs clearance, and destination-specific import controls. In all cases, Hadvika Traders provides proactive logistics updates.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Shipping Methods & Incoterms</h2>
              <p className="mb-4">
                We typically ship via reefer containers (20FT/40FT) using internationally recognized carriers. Incoterms offered include:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>FOB (Chennai / Tuticorin Port)</strong></li>
                <li><strong>CIF (Major GCC Ports / Africa)</strong></li>
                <li><strong>DAP/DDU available upon request</strong> (subject to legal and logistical review)</li>
              </ul>
              <p className="mb-8">
                All shipping terms and inclusions (e.g., temperature monitoring, insurance, container stuffing) will be explicitly listed in your pro forma invoice or contract.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Logistics Support Provided</h2>
              <p className="mb-4">
                We assist with end-to-end coordination for:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Export Documentation (Invoice, Packing List, Bill of Lading, etc.)</li>
                <li>Cold Chain Certification & Safety Protocols</li>
                <li>Customs Clearance Guidance (India & destination country)</li>
                <li>Container Loading Photos (on request)</li>
                <li>Real-Time Shipment Tracking and Alerts</li>
                <li>Last-mile delivery coordination (if contracted)</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Shipping Charges</h2>
              <p className="mb-4">
                Shipping costs are influenced by:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Destination port or delivery address</li>
                <li>Quantity and container size (e.g., 20FT vs 40FT reefer)</li>
                <li>Product mix and carton weight</li>
                <li>Incoterm selected (FOB, CIF, etc.)</li>
              </ul>
              <p className="mb-8">
                Shipping estimates are clearly presented during quotation and finalized in the invoice.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Delays & Force Majeure</h2>
              <p className="mb-4">
                Although we strive for punctuality, delays may occasionally occur due to:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Port congestion or strikes</li>
                <li>Customs inspections or regulatory changes</li>
                <li>Cold chain interruptions due to carrier error</li>
                <li>Natural disasters or unforeseen circumstances</li>
              </ul>
              <p className="mb-8">
                In such cases, Hadvika Traders will maintain transparent communication and offer all assistance within our control to expedite resolution.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Domestic Shipping (India)</h2>
              <p className="mb-4">
                For Indian institutional clients:
              </p>
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li>Orders are dispatched in cold-insulated transport vehicles</li>
                <li>Delivery timelines: 2–7 days depending on location</li>
                <li>GST-inclusive billing and standard temperature compliance apply</li>
              </ul>

              <div className="bg-gray-50 p-6 rounded-lg mt-12">
                <h2 className="text-2xl font-semibold mb-4">Need Shipping Assistance?</h2>
                <p className="mb-4">
                  Our export and logistics teams are available to answer any queries:
                </p>
                <p className="font-semibold">Hadvika Traders</p>
                <p>3/32, BALAJI LAYOUT, SABARI STREET, BINNY<br />
                COMPOUND, Tiruppur, Tiruppur, Tamil Nadu, 641602</p>
                <p className="mt-2">
                  <span className="font-medium">Phone:</span> <a href="tel:+919944311934" className="text-blue-600 hover:underline">+91 9944311934</a>
                </p>
                <p className="mb-2">
                  <span className="font-medium">Email:</span> <a href="mailto:info@hadvikatraders.biz" className="text-blue-600 hover:underline">info@hadvikatraders.biz</a>
                </p>
                <p className="text-sm text-gray-600">
                  WhatsApp Support: Available during IST business hours
                </p>
              </div>
            </div>
          )
        };

      case 'cancellation-and-refund':
        return {
          title: 'Cancellation & Refund Policy',
          content: (
            <div className="prose prose-lg max-w-none">
              <h1 className="text-3xl font-bold mb-6">Cancellation & Refund Policy</h1>
              <p className="text-xl text-gray-700 mb-8">
                Fair Terms. Temperature Integrity. Global Accountability.
              </p>
              
              <p className="mb-6">
                At Hadvika Traders, we are committed to delivering every order with precision, care, and cold chain excellence. As a global distributor of Arun Ice Creams, our policies are designed to protect product quality, maintain transparency, and serve the operational realities of B2B international logistics.
              </p>

              <p className="mb-8">
                This policy outlines how we handle cancellations, damaged consignments, and refund scenarios.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Order Cancellations</h2>
              <p className="mb-4">
                <strong>Cancellation Window:</strong> Within 24 hours of order confirmation
              </p>
              <p className="mb-4">
                Given the perishable nature of frozen products and the complexity of international shipping logistics, cancellations must be requested early.
              </p>
              <p className="mb-4">
                Cancellations are allowed only before:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>The order enters processing or</li>
                <li>A reefer container is booked/loaded</li>
              </ul>
              <p className="mb-6">
                Once orders are packed, shipped, or customs-cleared, they cannot be canceled or refunded.
              </p>
              <p className="mb-8">
                To cancel an order, email us at <a href="mailto:orders@hadvikatraders.com" className="text-blue-600 hover:underline">orders@hadvikatraders.com</a> with your Order ID and cancellation reason. Urgent cases should be followed up via WhatsApp or direct phone call.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Damaged or Compromised Shipments</h2>
              <p className="mb-4">
                If you receive a shipment that:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Is visibly damaged or thawed</li>
                <li>Arrives with tampered cartons or containers</li>
                <li>Is incomplete or mislabelled</li>
                <li>Shows signs of temperature breach (e.g. melted, re-frozen)</li>
              </ul>
              <p className="mb-4">
                Please notify us within 48 hours of delivery with the following:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Order ID or Invoice Copy</li>
                <li>Photos/Videos of the affected shipment</li>
                <li>Description of issue and number of affected units</li>
              </ul>
              <p className="mb-6">
                Our team will investigate promptly. Based on findings, you may be eligible for one of the following remedies:
              </p>
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li>Partial Credit Note (against affected items)</li>
                <li>Product Replacement (included in next shipment)</li>
                <li>Full Refund (for critical loss or irreparable logistics error)</li>
              </ul>
              <p className="mb-8 text-sm text-gray-600">
                Note: For international B2B clients, remedies are aligned with agreed Incoterms (FOB, CIF, DAP).
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Returns Policy</h2>
              <p className="mb-4">
                Due to the frozen and perishable nature of our products, returns are not accepted. Once delivered and received in good condition, products are deemed final-sale.
              </p>
              <p className="mb-8">
                This policy ensures the safety and integrity of consumables, and prevents re-entry of compromised stock into circulation.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Refund Process</h2>
              <p className="mb-4">
                If a refund is approved:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Initiation:</strong> Within 3–7 business days</li>
                <li><strong>Refund Method:</strong> Same payment mode (wire transfer, LC adjustment, etc.)</li>
                <li><strong>Confirmation:</strong> Issued via email or WhatsApp</li>
                <li><strong>Timeline to Receive Funds:</strong> Typically 7–14 business days depending on bank or international gateway</li>
              </ul>
              <p className="mb-8">
                Refunds are processed in INR or USD depending on the invoicing currency.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Exclusions & Force Majeure</h2>
              <p className="mb-4">
                Refunds/replacements will not be issued in the following cases:
              </p>
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li>Delays due to customs holds, port closures, strikes, or force majeure</li>
                <li>Mishandling or improper storage by the receiving party</li>
                <li>Incorrect shipping address or documentation supplied by client</li>
                <li>Claims raised after 48 hours of receipt without evidence</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">B2B & Distribution Clients</h2>
              <p className="mb-4">
                If you are a wholesale or long-term partner with custom pricing:
              </p>
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li>Refunds and dispute resolution will be guided by your Distributor Agreement</li>
                <li>Adjustments may be applied as credit toward future shipments</li>
                <li>For large container losses, resolution will include insurer coordination (if cargo was insured)</li>
              </ul>

              <div className="bg-gray-50 p-6 rounded-lg mt-12">
                <h2 className="text-2xl font-semibold mb-4">Need Assistance?</h2>
                <p className="mb-4">
                  Our team is here to resolve issues quickly and fairly:
                </p>
                <p className="font-semibold">Hadvika Traders</p>
                <p>3/32, BALAJI LAYOUT, SABARI STREET, BINNY<br />
                COMPOUND, Tiruppur, Tiruppur, Tamil Nadu, 641602</p>
                <p className="mt-2">
                  <span className="font-medium">Phone:</span> <a href="tel:+919944311934" className="text-blue-600 hover:underline">+91 9944311934</a>
                </p>
                <p className="mb-2">
                  <span className="font-medium">Email:</span> <a href="mailto:info@hadvikatraders.biz" className="text-blue-600 hover:underline">info@hadvikatraders.biz</a>
                </p>
                <p className="text-sm text-gray-600">
                  WhatsApp & Web Form: Available via our <a href="/contact" className="text-blue-600 hover:underline">Contact Page</a>
                </p>
              </div>
            </div>
          )
        };

      default:
        return { title: 'Legal Information', content: <div>Content not found</div> };
    }
  };

  const { title, content } = getContent();

  return (
    <div className="min-h-screen bg-[#FFF8EC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-xl shadow-sm p-8 lg:p-12">
          <div className="mb-8">
            <button
              onClick={() => navigate('/')}
              className="text-[#215C4C] hover:text-[#2B2B2B] transition-colors text-sm font-medium"
            >
              ← Back to Home
            </button>
          </div>
          
          <h1 className="text-3xl lg:text-4xl font-bold text-[#2B2B2B] mb-8 leading-tight">
            {title}
          </h1>
          
          <div className="text-gray-700 leading-relaxed [&>div>h2]:text-xl [&>div>h2]:font-semibold [&>div>h2]:text-[#215C4C] [&>div>h2]:mt-8 [&>div>h2]:mb-4 [&>div>h2]:first:mt-0 [&>div>p]:mb-4 [&>div>ul]:mb-4 [&>div>ul]:pl-6 [&>div>li]:mb-2">
            {content}
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              Last updated: January 2025
            </p>
            <p className="text-sm text-gray-600 mt-2">
              For questions about this policy, contact us at info@hadvikatraders.biz
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalPage;