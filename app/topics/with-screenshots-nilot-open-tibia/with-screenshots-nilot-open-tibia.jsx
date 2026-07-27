import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-nilot-open-tibia');
}

export default function WithScreenshotsNilotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-nilot-open-tibia" />;
}
