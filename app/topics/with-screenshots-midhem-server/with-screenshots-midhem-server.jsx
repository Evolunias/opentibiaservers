import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-midhem-server');
}

export default function WithScreenshotsMidhemServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-midhem-server" />;
}
