import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-midhem-ots');
}

export default function WithScreenshotsMidhemOtsKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-midhem-ots" />;
}
