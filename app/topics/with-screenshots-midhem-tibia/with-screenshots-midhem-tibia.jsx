import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-midhem-tibia');
}

export default function WithScreenshotsMidhemTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-midhem-tibia" />;
}
