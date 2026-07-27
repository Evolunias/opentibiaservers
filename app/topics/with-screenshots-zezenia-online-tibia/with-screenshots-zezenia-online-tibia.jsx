import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-zezenia-online-tibia');
}

export default function WithScreenshotsZezeniaOnlineTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-zezenia-online-tibia" />;
}
