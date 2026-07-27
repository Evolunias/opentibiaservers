import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-midhem-open-tibia');
}

export default function WithScreenshotsMidhemOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-midhem-open-tibia" />;
}
