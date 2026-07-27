import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-midhem-login');
}

export default function WithScreenshotsMidhemLoginKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-midhem-login" />;
}
