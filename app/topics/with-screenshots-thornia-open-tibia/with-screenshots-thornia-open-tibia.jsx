import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-thornia-open-tibia');
}

export default function WithScreenshotsThorniaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-thornia-open-tibia" />;
}
