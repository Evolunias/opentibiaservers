import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-midhem-client');
}

export default function WithScreenshotsMidhemClientKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-midhem-client" />;
}
