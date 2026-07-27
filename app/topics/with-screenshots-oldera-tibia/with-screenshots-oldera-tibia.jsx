import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-oldera-tibia');
}

export default function WithScreenshotsOlderaTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-oldera-tibia" />;
}
