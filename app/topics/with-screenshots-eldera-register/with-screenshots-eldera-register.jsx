import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-eldera-register');
}

export default function WithScreenshotsElderaRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-eldera-register" />;
}
