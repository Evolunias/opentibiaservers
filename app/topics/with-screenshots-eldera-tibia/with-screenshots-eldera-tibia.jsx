import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-eldera-tibia');
}

export default function WithScreenshotsElderaTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-eldera-tibia" />;
}
