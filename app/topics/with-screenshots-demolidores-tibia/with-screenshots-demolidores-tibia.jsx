import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-demolidores-tibia');
}

export default function WithScreenshotsDemolidoresTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-demolidores-tibia" />;
}
