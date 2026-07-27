import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-realera-tibia');
}

export default function WithScreenshotsRealeraTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-realera-tibia" />;
}
