import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-classick-drakoria-tibia');
}

export default function WithScreenshotsClassickDrakoriaTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-classick-drakoria-tibia" />;
}
