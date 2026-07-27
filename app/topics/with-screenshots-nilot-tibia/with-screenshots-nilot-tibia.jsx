import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-nilot-tibia');
}

export default function WithScreenshotsNilotTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-nilot-tibia" />;
}
