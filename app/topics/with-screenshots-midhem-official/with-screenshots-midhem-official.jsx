import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-midhem-official');
}

export default function WithScreenshotsMidhemOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-midhem-official" />;
}
