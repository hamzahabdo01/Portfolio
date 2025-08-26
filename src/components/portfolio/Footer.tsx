import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-8 border-t border-border bg-card"
    >
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-muted-foreground">
            © 2025 Tushar Joshi. All Rights Reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;