import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-midhem');
}

export default function WithScreenshotsMidhemKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-midhem" />;
}
