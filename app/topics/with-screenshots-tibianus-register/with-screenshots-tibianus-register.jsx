import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibianus-register');
}

export default function WithScreenshotsTibianusRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibianus-register" />;
}
