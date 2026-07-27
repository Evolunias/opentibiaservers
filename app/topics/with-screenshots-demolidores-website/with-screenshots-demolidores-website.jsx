import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-demolidores-website');
}

export default function WithScreenshotsDemolidoresWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-demolidores-website" />;
}
