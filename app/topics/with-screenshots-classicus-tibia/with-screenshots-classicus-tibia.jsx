import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-classicus-tibia');
}

export default function WithScreenshotsClassicusTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-classicus-tibia" />;
}
