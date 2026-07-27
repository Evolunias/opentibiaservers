import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-midhem-ot');
}

export default function WithScreenshotsMidhemOtKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-midhem-ot" />;
}
