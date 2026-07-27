import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-launch-argentina');
}

export default function WithScreenshotsLaunchArgentinaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-launch-argentina" />;
}
