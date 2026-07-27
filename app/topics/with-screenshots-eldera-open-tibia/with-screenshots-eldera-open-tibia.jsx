import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-eldera-open-tibia');
}

export default function WithScreenshotsElderaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-eldera-open-tibia" />;
}
