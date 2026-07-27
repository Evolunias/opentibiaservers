import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-unline-open-tibia');
}

export default function WithScreenshotsUnlineOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-unline-open-tibia" />;
}
