import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-sabrehaven-website');
}

export default function WithScreenshotsSabrehavenWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-sabrehaven-website" />;
}
