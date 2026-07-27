import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-oldera-open-tibia');
}

export default function WithScreenshotsOlderaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-oldera-open-tibia" />;
}
