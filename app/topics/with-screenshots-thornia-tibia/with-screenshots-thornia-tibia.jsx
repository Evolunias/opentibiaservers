import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-thornia-tibia');
}

export default function WithScreenshotsThorniaTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-thornia-tibia" />;
}
